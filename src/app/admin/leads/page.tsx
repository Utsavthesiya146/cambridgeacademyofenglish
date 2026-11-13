'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  course: string;
  learningMode?: string;
  preferredTime?: string;
  message?: string;
  type: 'enquiry' | 'callback' | 'counselling';
  pageUrl?: string;
  leadSource?: string;
  status: 'New' | 'Contacted' | 'Follow-up' | 'Converted';
  notes?: string;
  createdAt: string;
}

interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  status: 'VALID' | 'REVOKED' | 'INVALID';
  issuingInstitution: string;
  notes?: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'certificates'>('leads');
  const [storageMode, setStorageMode] = useState<'mysql' | 'unconfigured' | string | null>(null);
  
  // Leads state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Certificates state
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [certSearch, setCertSearch] = useState<string>('');
  const [certLoading, setCertLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCert, setNewCert] = useState({
    certificateNumber: '',
    studentName: '',
    courseName: '',
    issueDate: new Date().toISOString().split('T')[0],
    status: 'VALID' as Certificate['status'],
    notes: '',
  });
  const [certActionError, setCertActionError] = useState('');

  // Check existing session cookie on mount
  useEffect(() => {
    checkSessionAndLoad();
  }, []);

  const checkSessionAndLoad = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/session');
      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        setStorageMode(data.storageMode || null);
        await fetchAll();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout error:', err);
    }
    setIsAuthenticated(false);
    setAdminKey('');
    setLeads([]);
    setCertificates([]);
    setStorageMode(null);
    setError('');
  };

  const fetchAll = async () => {
    setLoading(true);
    setError('');
    try {
      const [leadsRes, certsRes] = await Promise.all([
        fetch('/api/admin/leads'),
        fetch('/api/admin/certificates'),
      ]);

      if (leadsRes.status === 401 || certsRes.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired or unauthorized. Please log in again.');
        return;
      }

      const leadsData = await leadsRes.json();
      const certsData = await certsRes.json();

      if (leadsRes.ok && leadsData.success) {
        setLeads(leadsData.leads || []);
        setStorageMode(leadsData.storageMode || null);
        setIsAuthenticated(true);
      } else {
        setError(leadsData.error || 'Failed to load admissions data.');
      }

      if (certsRes.ok && certsData.success) {
        setCertificates(certsData.certificates || []);
      }
    } catch {
      setError('Network error connecting to admissions server.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminKey.trim()) return;

    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminKey.trim() }),
      });
      const data = await res.json();
      setAdminKey(''); // Clear password from memory immediately

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setStorageMode(data.storageMode || null);
        await fetchAll();
      } else {
        setError(data.error || 'Authentication failed. Please verify admin password.');
        setIsAuthenticated(false);
      }
    } catch {
      setError('Network error connecting to admissions server.');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: Lead['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
      }
    } catch (err) {
      console.error('Update failed:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleNotesChange = async (id: string, notes: string) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, notes }),
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, notes } : l))
      );
    } catch (err) {
      console.error('Notes update failed:', err);
    }
  };

  const handleCertStatusChange = async (id: string, newStatus: Certificate['status']) => {
    try {
      const res = await fetch('/api/admin/certificates', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }
      if (res.ok) {
        setCertificates((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
      }
    } catch (err) {
      console.error('Certificate status update failed:', err);
    }
  };

  const handleAddCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCertActionError('');
    if (!newCert.certificateNumber.trim() || !newCert.studentName.trim() || !newCert.courseName.trim()) {
      setCertActionError('Please provide certificate number, student name, and course.');
      return;
    }

    setCertLoading(true);
    try {
      const res = await fetch('/api/admin/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCert),
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }
      const data = await res.json();
      if (res.ok && data.success) {
        setCertificates((prev) => [data.certificate, ...prev]);
        setShowAddModal(false);
        setNewCert({
          certificateNumber: '',
          studentName: '',
          courseName: '',
          issueDate: new Date().toISOString().split('T')[0],
          status: 'VALID',
          notes: '',
        });
      } else {
        setCertActionError(data.error || 'Failed to add certificate.');
      }
    } catch {
      setCertActionError('Network connection error.');
    } finally {
      setCertLoading(false);
    }
  };

  const exportCSV = () => {
    if (!leads.length) return;
    const headers = ['ID', 'Date', 'Type', 'Name', 'Phone', 'Email', 'Course', 'Mode', 'Status', 'Message', 'Notes'];
    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.createdAt).toLocaleString('en-IN')}"`,
      `"${l.type}"`,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${l.course}"`,
      `"${l.learningMode || ''}"`,
      `"${l.status}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `cambridge_academy_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = filterStatus === 'All' || l.status === filterStatus;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.phone.toLowerCase().includes(q) ||
      (l.email && l.email.toLowerCase().includes(q)) ||
      l.course.toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  const filteredCerts = certificates.filter((c) => {
    const q = certSearch.toLowerCase();
    return (
      !q ||
      c.certificateNumber.toLowerCase().includes(q) ||
      c.studentName.toLowerCase().includes(q) ||
      c.courseName.toLowerCase().includes(q)
    );
  });

  const statusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contacted':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Follow-up':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Converted':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const certStatusBadge = (status: Certificate['status']) => {
    switch (status) {
      case 'VALID':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'REVOKED':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'INVALID':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0a192f]">
                Cambridge Academy &ndash; Administration Portal
              </h1>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Bangalore Campus Admissions, Lead Management &amp; Certificate Registry
            </p>
            {isAuthenticated && storageMode && (
              <div className="mt-2">
                {storageMode === 'mysql' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Live MySQL Database Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    Database Not Configured (Set DATABASE_URL in environment for permanent MySQL storage)
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              &larr; Back to Website
            </Link>
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors"
              >
                Log Out
              </button>
            )}
            {isAuthenticated && activeTab === 'leads' && (
              <button
                onClick={exportCSV}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0a192f] hover:bg-[#162447] rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
              >
                &dArr; Export CSV
              </button>
            )}
            {isAuthenticated && activeTab === 'certificates' && (
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
              >
                + Issue / Register Certificate
              </button>
            )}
          </div>
        </div>

        {/* Authentication Card */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
            <div className="w-16 h-16 bg-[#0a192f] text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              CAE
            </div>
            <h2 className="text-xl font-bold text-[#0a192f] mb-1">
              Admissions &amp; Academic Security
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Enter your Administrator Password to establish a secure, HttpOnly session.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  placeholder="Enter Admin Password"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-center text-sm focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#0a192f] hover:bg-[#162447] text-white font-bold text-sm rounded-xl transition-all shadow-md disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Unlock Portal'}
              </button>
            </form>

            {error && (
              <p className="mt-4 text-xs font-medium text-rose-600 bg-rose-50 py-2 px-3 rounded-lg">
                {error}
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <span>🔒</span>
              <span>Encrypted HttpOnly &bull; SameSite=Strict Session</span>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="mt-6 space-y-6">
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200 gap-4">
              <button
                onClick={() => setActiveTab('leads')}
                className={`pb-3 px-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === 'leads'
                    ? 'border-[#0a192f] text-[#0a192f]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                <span>📋</span>
                <span>Student Leads ({leads.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`pb-3 px-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === 'certificates'
                    ? 'border-[#0a192f] text-[#0a192f]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                <span>🎓</span>
                <span>Certificate Registry ({certificates.length})</span>
              </button>
            </div>

            {/* TAB 1: LEADS MANAGEMENT */}
            {activeTab === 'leads' && (
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Enquiries', count: leads.length, color: 'text-[#0a192f]' },
                    { label: 'New Uncontacted', count: leads.filter((l) => l.status === 'New').length, color: 'text-blue-600' },
                    { label: 'In Follow-up', count: leads.filter((l) => l.status === 'Follow-up').length, color: 'text-purple-600' },
                    { label: 'Enrolled / Converted', count: leads.filter((l) => l.status === 'Converted').length, color: 'text-emerald-600' },
                  ].map((s, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{s.label}</p>
                      <p className={`text-2xl font-black mt-1 ${s.color}`}>{s.count}</p>
                    </div>
                  ))}
                </div>

                {/* Filter and Search Bar */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs font-bold text-slate-500 uppercase">Status:</span>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="All">All Statuses</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Follow-up">Follow-up</option>
                      <option value="Converted">Converted</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-72">
                    <input
                      type="text"
                      placeholder="Search candidate name, phone, course..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  {filteredLeads.length === 0 ? (
                    <div className="p-12 text-center text-slate-400 text-sm">
                      No leads match your current filter criteria.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50/75 border-b border-slate-200 text-slate-500 uppercase font-bold text-[10px] tracking-wider">
                            <th className="py-3 px-4">Candidate</th>
                            <th className="py-3 px-4">Contact</th>
                            <th className="py-3 px-4">Programme</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Notes</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-4 px-4 font-bold text-slate-900">
                                {lead.name}
                                <span className="block text-[10px] text-slate-400 font-normal uppercase tracking-wider mt-0.5">
                                  {lead.type} &bull; {lead.learningMode || 'Offline'}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <a href={`tel:${lead.phone}`} className="font-semibold text-slate-700 hover:text-[#0a192f]">
                                  {lead.phone}
                                </a>
                                {lead.email && (
                                  <span className="block text-[10px] text-slate-400 truncate max-w-[150px]">
                                    {lead.email}
                                  </span>
                                )}
                              </td>
                              <td className="py-4 px-4 text-slate-800 font-medium">
                                {lead.course}
                                <span className="block text-[10px] text-slate-400">
                                  Timing: {lead.preferredTime || 'Anytime'}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-slate-500 whitespace-nowrap text-[11px]">
                                {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </td>
                              <td className="py-4 px-4">
                                <select
                                  value={lead.status}
                                  disabled={updatingId === lead.id}
                                  onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                                  className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border transition-colors cursor-pointer ${statusBadge(
                                    lead.status
                                  )}`}
                                >
                                  <option value="New">New</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="Follow-up">Follow-up</option>
                                  <option value="Converted">Converted</option>
                                </select>
                              </td>
                              <td className="py-4 px-4 max-w-xs">
                                {lead.message && (
                                  <p className="text-[11px] text-slate-600 italic line-clamp-2 mb-1">
                                    &ldquo;{lead.message}&rdquo;
                                  </p>
                                )}
                                <input
                                  type="text"
                                  defaultValue={lead.notes || ''}
                                  placeholder="Add note..."
                                  onBlur={(e) => handleNotesChange(lead.id, e.target.value)}
                                  className="w-full text-[11px] px-2 py-1 border border-slate-200 rounded focus:border-[#d4af37] focus:outline-none bg-slate-50/50"
                                />
                              </td>
                              <td className="py-4 px-4 text-right whitespace-nowrap space-x-2">
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                                  title="Call Student"
                                >
                                  📞
                                </a>
                                <a
                                  href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                                    `Hello ${lead.name}, greetings from Cambridge Academy of English, Bangalore! We received your enquiry regarding ${lead.course}. When is a good time to connect?`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                                  title="Open WhatsApp"
                                >
                                  💬
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: CERTIFICATE REGISTRY */}
            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="w-full sm:w-80">
                    <input
                      type="text"
                      placeholder="Search certificate number, student, course..."
                      value={certSearch}
                      onChange={(e) => setCertSearch(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/verification"
                      target="_blank"
                      className="text-xs font-bold text-[#0a192f] hover:text-[#d4af37] underline"
                    >
                      Open Public Verification Page &rarr;
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  {filteredCerts.length === 0 ? (
                    <div className="p-12 text-center text-slate-400 text-sm">
                      No certificates registered yet. Click &ldquo;+ Issue / Register Certificate&rdquo; above to record credentials.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50/75 border-b border-slate-200 text-slate-500 uppercase font-bold text-[10px] tracking-wider">
                            <th className="py-3 px-4">Serial Number</th>
                            <th className="py-3 px-4">Student Name</th>
                            <th className="py-3 px-4">Course / Programme</th>
                            <th className="py-3 px-4">Issue Date</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Authority</th>
                            <th className="py-3 px-4 text-right">Public Check</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredCerts.map((c) => (
                            <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                              <td className="py-4 px-4 font-mono font-bold text-slate-900">
                                {c.certificateNumber}
                              </td>
                              <td className="py-4 px-4 font-semibold text-slate-800">
                                {c.studentName}
                              </td>
                              <td className="py-4 px-4 text-slate-700">
                                {c.courseName}
                              </td>
                              <td className="py-4 px-4 text-slate-500 whitespace-nowrap">
                                {new Date(c.issueDate).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </td>
                              <td className="py-4 px-4">
                                <select
                                  value={c.status}
                                  onChange={(e) =>
                                    handleCertStatusChange(c.id, e.target.value as Certificate['status'])
                                  }
                                  className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border transition-colors cursor-pointer ${certStatusBadge(
                                    c.status
                                  )}`}
                                >
                                  <option value="VALID">VALID</option>
                                  <option value="REVOKED">REVOKED</option>
                                  <option value="INVALID">INVALID</option>
                                </select>
                              </td>
                              <td className="py-4 px-4 text-slate-500 text-[11px]">
                                {c.issuingInstitution || 'Cambridge Academy of English'}
                              </td>
                              <td className="py-4 px-4 text-right whitespace-nowrap">
                                <Link
                                  href={`/verification?number=${encodeURIComponent(c.certificateNumber)}`}
                                  target="_blank"
                                  className="inline-block px-2.5 py-1 text-[11px] font-bold text-[#0a192f] bg-slate-100 hover:bg-[#d4af37] hover:text-white rounded transition-colors"
                                >
                                  Verify &rarr;
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal: Add Certificate */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100">
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                &times;
              </button>
              <h3 className="text-lg font-black text-[#0a192f] mb-1">
                Register Issued Certificate
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Add an official certificate record to the institutional verification registry.
              </p>

              <form onSubmit={handleAddCertificate} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Certificate Serial Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CAE/2024/00123"
                    value={newCert.certificateNumber}
                    onChange={(e) => setNewCert({ ...newCert, certificateNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={newCert.studentName}
                    onChange={(e) => setNewCert({ ...newCert, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Course / Programme *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Diploma in English Language"
                    value={newCert.courseName}
                    onChange={(e) => setNewCert({ ...newCert, courseName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                      Issue Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={newCert.issueDate}
                      onChange={(e) => setNewCert({ ...newCert, issueDate: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                      Status
                    </label>
                    <select
                      value={newCert.status}
                      onChange={(e) =>
                        setNewCert({ ...newCert, status: e.target.value as Certificate['status'] })
                      }
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="VALID">VALID</option>
                      <option value="REVOKED">REVOKED</option>
                      <option value="INVALID">INVALID</option>
                    </select>
                  </div>
                </div>

                {certActionError && (
                  <p className="text-xs text-rose-600 bg-rose-50 p-2 rounded">
                    {certActionError}
                  </p>
                )}

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={certLoading}
                    className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow disabled:opacity-50"
                  >
                    {certLoading ? 'Registering...' : 'Save Certificate'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

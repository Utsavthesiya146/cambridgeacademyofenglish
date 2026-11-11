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

export default function AdminLeadsPage() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('cae_admin_key');
    if (savedKey) {
      setAdminKey(savedKey);
      fetchLeads(savedKey);
    }
  }, []);

  const fetchLeads = async (key: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/leads?key=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads || []);
        setIsAuthenticated(true);
        localStorage.setItem('cae_admin_key', key);
      } else {
        setError(data.error || 'Authentication failed. Please verify admin secret key.');
        setIsAuthenticated(false);
      }
    } catch {
      setError('Network error connecting to admissions server.');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminKey.trim()) {
      fetchLeads(adminKey.trim());
    }
  };

  const handleStatusChange = async (id: string, newStatus: Lead['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
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
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({ id, notes }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, notes } : l))
      );
    } catch (err) {
      console.error('Notes update failed:', err);
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

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0a192f]">
                Cambridge Academy – Lead Management Portal
              </h1>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Bangalore Campus Admissions &amp; Course Enquiries Dashboard
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              ← Back to Website
            </Link>
            {isAuthenticated && (
              <button
                onClick={exportCSV}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0a192f] hover:bg-[#162447] rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
              >
                📥 Export CSV
              </button>
            )}
          </div>
        </div>

        {/* Authentication Card */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
            <div className="w-14 h-14 bg-blue-50 text-[#0a192f] rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              🔒
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Admissions Login</h2>
            <p className="text-xs text-slate-500 mb-6">
              Enter the authorized administrator passkey to view student leads. (Default: CambridgeAdmin2026)
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Admin Secret Key"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  required
                />
              </div>
              {error && <p className="text-xs text-rose-600 font-semibold">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#0a192f] text-white font-bold rounded-xl hover:bg-[#162447] transition-colors disabled:opacity-50 text-sm"
              >
                {loading ? 'Authenticating...' : 'Access Lead Portal'}
              </button>
            </form>
          </div>
        ) : (
          /* Main Dashboard */
          <div className="mt-8 space-y-6">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { label: 'Total Enquiries', count: leads.length, color: 'text-slate-800' },
                { label: 'New / Unattended', count: leads.filter((l) => l.status === 'New').length, color: 'text-blue-600' },
                { label: 'Contacted', count: leads.filter((l) => l.status === 'Contacted').length, color: 'text-amber-600' },
                { label: 'In Follow-up', count: leads.filter((l) => l.status === 'Follow-up').length, color: 'text-purple-600' },
                { label: 'Enrolled / Converted', count: leads.filter((l) => l.status === 'Converted').length, color: 'text-emerald-600' },
              ].map((m, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{m.label}</p>
                  <p className={`text-2xl font-black mt-1 ${m.color}`}>{m.count}</p>
                </div>
              ))}
            </div>

            {/* Filter and Search Controls */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-1">Status:</span>
                {['All', 'New', 'Contacted', 'Follow-up', 'Converted'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                      filterStatus === st
                        ? 'bg-[#0a192f] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search name, phone, course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-16">
                  <span className="text-4xl">📭</span>
                  <p className="text-slate-600 font-semibold mt-3 text-sm">No enquiries found matching this filter.</p>
                  <p className="text-xs text-slate-400 mt-1">Student submissions from website forms will appear here in real-time.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                        <th className="py-3.5 px-4">Date / Type</th>
                        <th className="py-3.5 px-4">Student Name</th>
                        <th className="py-3.5 px-4">Contact Details</th>
                        <th className="py-3.5 px-4">Course &amp; Mode</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4">Message / Notes</th>
                        <th className="py-3.5 px-4 text-right">Direct Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="font-semibold text-slate-800">
                              {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {new Date(lead.createdAt).toLocaleTimeString('en-IN', {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-600 border border-slate-200">
                              {lead.type}
                            </span>
                          </td>

                          <td className="py-4 px-4 font-bold text-slate-900 text-sm">
                            {lead.name}
                          </td>

                          <td className="py-4 px-4">
                            <div className="font-medium text-slate-800">{lead.phone}</div>
                            {lead.email && (
                              <div className="text-slate-500 text-[11px] truncate max-w-[160px]">
                                {lead.email}
                              </div>
                            )}
                          </td>

                          <td className="py-4 px-4">
                            <div className="font-bold text-[#0a192f]">{lead.course}</div>
                            <div className="text-[11px] text-slate-500">
                              Mode: <span className="font-medium text-slate-700">{lead.learningMode || 'Any'}</span>
                            </div>
                            {lead.preferredTime && (
                              <div className="text-[10px] text-slate-400">Pref: {lead.preferredTime}</div>
                            )}
                          </td>

                          <td className="py-4 px-4">
                            <select
                              value={lead.status}
                              disabled={updatingId === lead.id}
                              onChange={(e) =>
                                handleStatusChange(lead.id, e.target.value as Lead['status'])
                              }
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
                              placeholder="Add internal note..."
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
                              title="Open WhatsApp Chat"
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
      </div>
    </div>
  );
}


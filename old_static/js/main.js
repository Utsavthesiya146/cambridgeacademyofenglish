/**
 * CAMBRIDGE ACADEMY OF ENGLISH - MAIN INTERACTIVE FRONTEND SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initCourseFinder();
  initModals();
  initForms();
  initPlacementTest();
  initCounterAnimations();
});

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');
  const closeBtn = document.querySelector('.mobile-close-btn');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
}

/* ==========================================================================
   COURSE FINDER FILTERING INTERACTION
   ========================================================================== */
function initCourseFinder() {
  const finderForm = document.getElementById('course-finder-form');
  const courseCards = document.querySelectorAll('.course-card');
  const resultCount = document.getElementById('finder-result-count');

  if (!finderForm || !courseCards.length) return;

  finderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterCourses();
  });

  // Also trigger filter on select change
  const selects = finderForm.querySelectorAll('select');
  selects.forEach(select => {
    select.addEventListener('change', filterCourses);
  });

  function filterCourses() {
    const goalVal = document.getElementById('finder-goal')?.value || 'all';
    const levelVal = document.getElementById('finder-level')?.value || 'all';
    const modeVal = document.getElementById('finder-mode')?.value || 'all';

    let visibleCount = 0;

    courseCards.forEach(card => {
      const cardGoal = card.dataset.category || '';
      const cardLevel = card.dataset.level || '';
      const cardMode = card.dataset.mode || '';

      const matchGoal = (goalVal === 'all' || cardGoal.includes(goalVal));
      const matchLevel = (levelVal === 'all' || cardLevel.includes(levelVal));
      const matchMode = (modeVal === 'all' || cardMode.includes(modeVal));

      if (matchGoal && matchLevel && matchMode) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.4s ease forwards';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultCount) {
      resultCount.textContent = `Showing ${visibleCount} matching course${visibleCount === 1 ? '' : 's'}`;
    }
  }
}

/* ==========================================================================
   MODALS & ENQUIRY POPUPS
   ========================================================================== */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal-overlay');
  const closeBtns = document.querySelectorAll('.modal-close');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);

      // Pre-fill course name if passed
      const courseName = trigger.getAttribute('data-course-name');
      if (courseName && targetModal) {
        const courseInput = targetModal.querySelector('input[name="course"]');
        if (courseInput) courseInput.value = courseName;
      }

      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay').classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* ==========================================================================
   FORM VALIDATION & DEMO SUBMISSION HANDLING
   ========================================================================== */
function initForms() {
  const forms = document.querySelectorAll('.interactive-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic client-side validation
      const requiredInputs = form.querySelectorAll('[required]');
      let isValid = true;

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      // Close modal if inside one
      const parentModal = form.closest('.modal-overlay');
      if (parentModal) {
        parentModal.classList.remove('active');
        document.body.style.overflow = '';
      }

      // Clear form
      form.reset();

      // Display official demo submission confirmation notice
      showToast('Demo Form Submitted: Enquiry recorded locally (Demo mode - no real backend connected).', 'info');
    });
  });
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  const icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
  toast.innerHTML = `<i class="fa ${icon}"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   INTERACTIVE PLACEMENT TEST MODULE
   ========================================================================== */
function initPlacementTest() {
  const testContainer = document.getElementById('placement-test-app');
  if (!testContainer) return;

  const questions = [
    {
      q: "She ________ to the Cambridge English course every Tuesday and Thursday.",
      options: ["goes", "going", "go", "is gone"],
      answer: 0
    },
    {
      q: "If I ________ more time, I would study another foreign language like German or French.",
      options: ["have", "had", "will have", "would have"],
      answer: 1
    },
    {
      q: "By next year, our IELTS students ________ their preparation classes.",
      options: ["will complete", "will have completed", "completed", "have complete"],
      answer: 1
    },
    {
      q: "The teacher recommended ________ English podcasts daily to improve listening comprehension.",
      options: ["listen", "to listening", "listening", "to listen"],
      answer: 2
    },
    {
      q: "Which of the following expresses a polite professional request?",
      options: ["I want you to give me details.", "Could you please send me the course schedule?", "Send schedule now.", "Give schedule."],
      answer: 1
    }
  ];

  let currentIdx = 0;
  let score = 0;

  function renderQuestion() {
    if (currentIdx >= questions.length) {
      renderResult();
      return;
    }

    const currentQ = questions[currentIdx];
    testContainer.innerHTML = `
      <div style="background:#fff; border-radius:16px; padding:30px; border:1px solid #e2e8f0; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <div style="display:flex; justify-content:space-between; margin-bottom:20px; font-weight:700; color:#0f2557;">
          <span>Question ${currentIdx + 1} of ${questions.length}</span>
          <span style="color:#d4af37;">20-Min Level Assessment</span>
        </div>
        <h3 style="font-size:1.2rem; margin-bottom:20px; color:#1e293b;">${currentQ.q}</h3>
        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
          ${currentQ.options.map((opt, i) => `
            <button class="opt-btn" data-index="${i}" style="text-align:left; padding:14px 18px; border:1.5px solid #e2e8f0; border-radius:10px; background:#fff; cursor:pointer; font-weight:500; font-size:0.98rem; transition:all 0.2s;">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const btns = testContainer.querySelectorAll('.opt-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedOpt = parseInt(btn.getAttribute('data-index'));
        if (selectedOpt === currentQ.answer) {
          score++;
        }
        currentIdx++;
        renderQuestion();
      });
    });
  }

  function renderResult() {
    let level = 'Beginner (A1/A2)';
    let rec = 'Spoken English Foundation / General English Course';
    if (score >= 4) {
      level = 'Advanced (C1/C2)';
      rec = 'IELTS 8.5 Band Preparation / Business & Professional English';
    } else if (score >= 2) {
      level = 'Intermediate (B1/B2)';
      rec = 'Communicative Spoken English & Cambridge Exam Prep';
    }

    testContainer.innerHTML = `
      <div style="background:#fff; border-radius:16px; padding:40px; text-align:center; border:2px solid #d4af37; box-shadow:0 15px 35px rgba(0,0,0,0.08);">
        <div style="width:70px; height:70px; background:#fef9e7; color:#d4af37; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px auto; font-size:2rem;">
          <i class="fa fa-trophy"></i>
        </div>
        <h3 style="font-size:1.8rem; color:#0f2557; margin-bottom:10px;">Assessment Complete!</h3>
        <p style="color:#64748b; font-size:1.05rem; margin-bottom:20px;">Your Estimated Score: <strong>${score} / ${questions.length}</strong></p>
        <div style="background:#f8fafc; padding:20px; border-radius:12px; margin-bottom:24px;">
          <h4 style="color:#0f2557; margin-bottom:6px;">Recommended Level: <span style="color:#d4af37;">${level}</span></h4>
          <p style="color:#475569; font-size:0.95rem;">Suggested Program: <strong>${rec}</strong></p>
        </div>
        <a href="courses.html" class="btn btn-navy">Browse Recommended Courses</a>
      </div>
    `;
  }

  renderQuestion();
}

/* Counter animation for stats */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || '0');
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.textContent = Math.ceil(count).toLocaleString();
            setTimeout(updateCount, 30);
          } else {
            el.textContent = target.toLocaleString();
          }
        };

        updateCount();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

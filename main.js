// ===== THE FUNDED TRADERS - MAIN JS =====

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX - 6 + 'px';
    cursor.style.top = mouseY - 6 + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX - 18 + 'px';
    cursorFollower.style.top = followerY - 18 + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .btn, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hovering'); cursorFollower.classList.add('hovering'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hovering'); cursorFollower.classList.remove('hovering'); });
  });
}

// Navbar scroll effect
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile nav
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Intersection Observer for animations
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
      }, delay * 150);
      observer.unobserve(el);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)';
  observer.observe(el);
});

// Counter animation
function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const duration = 2000;
  const isFloat = target % 1 !== 0;
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// Toast notifications
function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container') || (() => {
    const c = document.createElement('div');
    c.className = 'toast-container';
    document.body.appendChild(c);
    return c;
  })();
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 400); }, 3500);
}
window.showToast = showToast;

// Modal system
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
  });
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => { btn.closest('.modal-overlay').classList.remove('open'); document.body.style.overflow = ''; });
});
window.openModal = openModal;
window.closeModal = closeModal;

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const trigger = item.querySelector('.faq-trigger');
  const content = item.querySelector('.faq-content');
  if (trigger && content) {
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-content').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});

// Tab system
document.querySelectorAll('[data-tab-trigger]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const group = trigger.closest('[data-tab-group]');
    const tab = trigger.dataset.tabTrigger;
    if (group) {
      group.querySelectorAll('[data-tab-trigger]').forEach(t => t.classList.remove('active'));
      group.querySelectorAll('[data-tab-content]').forEach(c => c.classList.remove('active'));
      trigger.classList.add('active');
      const content = group.querySelector(`[data-tab-content="${tab}"]`);
      if (content) content.classList.add('active');
    }
  });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Smooth page transitions
document.querySelectorAll('a[href]:not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not([href^="http"]):not([href^="https"])').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.href && !link.target) {
      e.preventDefault();
      document.body.style.opacity = '0.7';
      document.body.style.transition = 'opacity 0.25s ease';
      setTimeout(() => { window.location.href = link.href; }, 250);
    }
  });
});
window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.4s ease';
});

// Auth check (simulated)
function isLoggedIn() {
  return localStorage.getItem('tft_logged_in') === 'true';
}
function getUser() {
  const u = localStorage.getItem('tft_user');
  return u ? JSON.parse(u) : null;
}
function logout() {
  localStorage.removeItem('tft_logged_in');
  localStorage.removeItem('tft_user');
  window.location.href = 'index.html';
}
window.isLoggedIn = isLoggedIn;
window.getUser = getUser;
window.logout = logout;

// Update nav for logged-in state
function updateNavAuth() {
  const navCta = document.querySelector('.nav-cta');
  if (navCta && isLoggedIn()) {
    const user = getUser();
    navCta.innerHTML = `
      <a href="dashboard.html" class="btn btn-outline btn-sm">Dashboard</a>
      <button onclick="logout()" class="btn btn-ghost btn-sm">Logout</button>
    `;
  }
}
updateNavAuth();

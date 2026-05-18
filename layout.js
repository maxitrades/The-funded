// ===== SHARED LAYOUT - NAV & FOOTER =====

const NAV_HTML = `
<div class="cursor"></div>
<div class="cursor-follower"></div>

<nav>
  <a href="index.html" class="nav-logo">
    <img src="assets/logo.svg" alt="The Funded Traders" onerror="this.style.display='none'">
    <div class="nav-logo-text">The Funded Traders <span>Elite Prop Trading</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="challenges.html">Challenges</a></li>
    <li><a href="how-it-works.html">How It Works</a></li>
    <li><a href="leaderboard.html">Leaderboard</a></li>
    <li><a href="faq.html">FAQ</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="nav-cta">
    <a href="login.html" class="btn btn-outline btn-sm">Login</a>
    <a href="signup.html" class="btn btn-gold btn-sm">Start Challenge</a>
  </div>
  <div class="hamburger" id="hamburgerBtn">
    <span></span><span></span><span></span>
  </div>
</nav>

<div class="mobile-nav" id="mobileNav">
  <ul class="mobile-nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="challenges.html">Challenges</a></li>
    <li><a href="how-it-works.html">How It Works</a></li>
    <li><a href="leaderboard.html">Leaderboard</a></li>
    <li><a href="faq.html">FAQ</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="login.html">Login</a></li>
    <li><a href="signup.html">Start Challenge</a></li>
  </ul>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="nav-logo" style="margin-bottom:20px;display:flex;">
          <img src="assets/logo.svg" alt="The Funded Traders" style="height:40px;" onerror="this.style.display='none'">
          <div class="nav-logo-text">The Funded Traders <span>Elite Prop Trading</span></div>
        </a>
        <p style="color:var(--white-dim);font-size:0.875rem;line-height:1.8;max-width:280px;margin-top:16px;">
          The Funded Traders empowers skilled traders worldwide with access to real capital. Prove your edge, get funded, and trade your way to success.
        </p>
        <div class="social-links" style="margin-top:24px;">
          <a href="https://wa.me/254718828633" class="social-link" target="_blank" title="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://instagram.com/maxi.trades" class="social-link" target="_blank" title="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="mailto:thefundedtraderscare@gmail.com" class="social-link" title="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4 class="footer-heading">Programs</h4>
        <ul class="footer-links">
          <li><a href="challenges.html">The Accelerator</a></li>
          <li><a href="challenges.html">The Endurance</a></li>
          <li><a href="challenges.html">The Elite Path</a></li>
          <li><a href="challenges.html">Compare Plans</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-heading">Company</h4>
        <ul class="footer-links">
          <li><a href="how-it-works.html">How It Works</a></li>
          <li><a href="leaderboard.html">Leaderboard</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-heading">Legal</h4>
        <ul class="footer-links">
          <li><a href="terms.html">Terms of Service</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="risk.html">Risk Disclosure</a></li>
          <li><a href="refund.html">Refund Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 The Funded Traders. All rights reserved. Trading involves substantial risk of loss.</p>
      <p style="color:var(--white-dim);font-size:0.75rem;">Not financial advice. Results may vary.</p>
    </div>
  </div>
</footer>

<div class="toast-container"></div>
`;

// Inject layout
document.addEventListener('DOMContentLoaded', () => {
  // Insert nav before first child
  const navWrapper = document.createElement('div');
  navWrapper.innerHTML = NAV_HTML;
  document.body.insertBefore(navWrapper, document.body.firstChild);

  // Insert footer at end
  const footerWrapper = document.createElement('div');
  footerWrapper.innerHTML = FOOTER_HTML;
  document.body.appendChild(footerWrapper);

  // Re-run nav/hamburger bindings after injection
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
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
});

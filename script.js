/**
 * La Cocina de la Familia Cejas — script.js
 * Shared across all pages: navbar, hamburger, scroll-reveal, active page
 */
'use strict';

// ============================================
// 1. NAVBAR — Transparent → Solid on scroll
// ============================================
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar(); // run once on load


// ============================================
// 2. ACTIVE PAGE LINK HIGHLIGHT
// ============================================
(function highlightActivePage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-anchor').forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkFile = href.split('/').pop();

        const isHome = (filename === 'index.html' || filename === '') &&
                       (linkFile === 'index.html' || linkFile === '' || linkFile === '#');

        const isMatch = (!isHome && linkFile && href.includes(linkFile) && filename.includes(linkFile.replace('.html','')));

        if (isHome || isMatch) {
            link.classList.add('active-page');
        }
    });
})();


// ============================================
// 3. HAMBURGER MENU (Mobile)
// ============================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu   = document.getElementById('mobile-menu');
const mobileLinks  = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    navbar.classList.add('scrolled');
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    updateNavbar();
}

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.contains('hidden') ? openMobileMenu() : closeMobileMenu();
});

mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
        hamburgerBtn.focus();
    }
});


// ============================================
// 4. SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
// ============================================
const revealEls = document.querySelectorAll('.reveal-element');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseFloat(entry.target.dataset.delay || '0') * 1000;
                    setTimeout(() => entry.target.classList.add('is-visible'), delay);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
} else {
    // Fallback
    revealEls.forEach(el => el.classList.add('is-visible'));
}


// ============================================
// 5. SMOOTH SCROLL for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const id = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

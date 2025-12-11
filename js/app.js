/**
 * INFLAPY - Renta de Inflables CDMX
 * JavaScript Principal
 */

(function() {
  'use strict';

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Header Scroll Effect
  // ========================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
  }, { passive: true });


  // ========================================
  // Dropdown Menu for Mobile
  // ========================================
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');

    toggle.addEventListener('click', function(e) {
      // Only prevent default on mobile
      if (window.innerWidth < 1024) {
        e.preventDefault();
        dropdown.classList.toggle('active');

        // Close other dropdowns
        dropdowns.forEach(function(other) {
          if (other !== dropdown) {
            other.classList.remove('active');
          }
        });
      }
    });
  });

  // ========================================
  // FAQ Accordion Enhancement
  // ========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    const summary = item.querySelector('summary');

    summary.addEventListener('click', function(e) {
      // Close other open items
      faqItems.forEach(function(otherItem) {
        if (otherItem !== item && otherItem.hasAttribute('open')) {
          otherItem.removeAttribute('open');
        }
      });
    });
  });

  // ========================================
  // WhatsApp Button Analytics (placeholder)
  // ========================================
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

  whatsappLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Analytics tracking placeholder
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'WhatsApp',
          'event_label': 'Contact Click'
        });
      }

      // Console log for debugging
      console.log('WhatsApp contact initiated');
    });
  });

  // ========================================
  // Phone Click Tracking
  // ========================================
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Phone',
          'event_label': 'Call Click'
        });
      }

      console.log('Phone call initiated');
    });
  });

  // ========================================
  // Lazy Loading Images (for future use)
  // ========================================
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(function(img) {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ========================================
  // Current Year in Footer
  // ========================================
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();

  yearElements.forEach(function(el) {
    el.textContent = currentYear;
  });

  // ========================================
  // Preloader (if needed)
  // ========================================
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    // Remove any preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(function() {
        preloader.remove();
      }, 500);
    }
  });


  // ========================================
  // Console Welcome Message
  // ========================================
  console.log('%c<� INFLAPY', 'font-size: 24px; font-weight: bold; color: #FF6B35;');
  console.log('%c30 a�os de diversi�n garantizada', 'font-size: 14px; color: #757575;');
  console.log('%cDesarrollado con d para crear momentos inolvidables', 'font-size: 12px; color: #9E9E9E;');

})();

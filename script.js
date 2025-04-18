document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (mobileMenuClose && mobileMenu) {
      mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    
    // Search toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.querySelector('.search-form');
    const searchClose = document.querySelector('.search-close');
    
    if (searchToggle && searchForm) {
      searchToggle.addEventListener('click', function() {
        searchForm.classList.add('active');
        searchToggle.style.display = 'none';
      });
    }
    
    if (searchClose && searchForm && searchToggle) {
      searchClose.addEventListener('click', function() {
        searchForm.classList.remove('active');
        searchToggle.style.display = 'flex';
      });
    }
  });














  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.financing-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your financing application has been submitted!');
        form.reset();
      });
    }
  });
  
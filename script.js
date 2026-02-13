// Bottom Navigation More Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const moreMenuToggle = document.querySelector('.more-menu-toggle');
    const moreMenuPopup = document.querySelector('.more-menu-popup');
    
    if (moreMenuToggle && moreMenuPopup) {
        // Toggle menu on button click
        moreMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            moreMenuToggle.classList.toggle('active');
            moreMenuPopup.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.more-menu')) {
                moreMenuToggle.classList.remove('active');
                moreMenuPopup.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const menuLinks = moreMenuPopup.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                moreMenuToggle.classList.remove('active');
                moreMenuPopup.classList.remove('active');
            });
        });
    }
    
    // Set active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.bottom-nav .nav-item, nav ul a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

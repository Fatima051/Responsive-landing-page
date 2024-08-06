// assets/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.color = '#ff6347';
        });

        link.addEventListener('mouseleave', function() {
            link.style.color = 'white';
        });
    });
});

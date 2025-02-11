// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Toggle Mobile Menu (if you add a hamburger menu in future)
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar nav');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
}

// Button Click Feedback
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert("This feature is coming soon!");
    });
});

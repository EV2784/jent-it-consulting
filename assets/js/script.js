// Custom JavaScript for JentTech IT Solutions Website

// This file is currently minimal but serves as a placeholder for future interactivity.
// You might add JavaScript here for:
// - Smooth scrolling for anchor links
// - Dynamic content loading
// - Complex form validations beyond Bootstrap's built-in ones
// - Animations (if not using pure CSS)
// - Integrations with third-party APIs (e.g., live chat, advanced analytics)

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components that require JS
    // For example, if you add tooltips or popovers:
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })

    // If you add a dynamic "Back to Top" button
    const backToTopButton = document.getElementById('backToTopBtn');
    if (backToTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Smooth scroll for anchor links (if needed and not handled by browser behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more complex JS here as your site grows.
});

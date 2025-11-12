// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Trigger animations for elements already in view
    const animateElements = document.querySelectorAll('.animate-fade-in');
    animateElements.forEach((el, index) => {
        setTimeout(() => {
            const rect = el.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight);
            
            if(isVisible) {
                el.classList.add('opacity-100', 'translate-y-0');
            }
        }, index * 100);
    });
    
    // Mobile menu toggle (will be used by navbar component)
    window.toggleMobileMenu = function() {
        const navbar = document.querySelector('custom-navbar');
        if (navbar && navbar.shadowRoot) {
            const menu = navbar.shadowRoot.getElementById('mobile-menu');
            if (menu) {
                menu.classList.toggle('open');
            }
        }
    };
    
    // Language switcher
    const langSwitcher = document.getElementById('lang-switcher');
    if(langSwitcher) {
        langSwitcher.addEventListener('change', function() {
            const selectedLang = this.value;
            // In a real app, you would redirect to the correct language version
            console.log('Language changed to:', selectedLang);
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form validation for contact and reservation forms
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        if(!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });

    if (!isValid) {
        alert('Per favore, compila tutti i campi obbligatori.');
    }

    return isValid;
}

// Dark mode toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
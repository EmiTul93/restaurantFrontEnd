// Utility functions for the website

// Set hero background image
function setHeroBackground(elementId, imageUrl) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundImage = `url('${imageUrl}')`;
    }
}

// Initialize Feather icons
function initializeFeatherIcons() {
    if (window.feather) {
        feather.replace();
    }
}

// Scroll animations
function initializeScrollAnimations() {
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if(elementPosition < screenPosition) {
                element.classList.add('opacity-100', 'translate-y-0');
            }
        });
    });
}

// Form validation
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

// Set minimum date for date inputs
function setMinimumDate(inputId) {
    const dateInput = document.getElementById(inputId);
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setHeroBackground,
        initializeFeatherIcons,
        initializeScrollAnimations,
        validateForm,
        setMinimumDate
    };
}

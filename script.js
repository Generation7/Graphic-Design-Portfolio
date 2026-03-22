// Portfolio Lightbox/Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded - initializing lightbox');
    
    const modal = document.getElementById('imageModal');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    console.log('Modal found:', !!modal);
    console.log('Portfolio items found:', portfolioItems.length);
    
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }

    // Click handler for each portfolio item
    portfolioItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function(e) {
            console.log('Portfolio item clicked:', index);
            e.stopPropagation();
            
            const imagePath = this.getAttribute('data-image');
            const title = this.getAttribute('data-title');
            
            console.log('Image path:', imagePath);
            console.log('Title:', title);
            
            if (imagePath) {
                document.getElementById('modalImage').src = imagePath;
                document.getElementById('modalCaption').textContent = title || '';
                modal.classList.add('show');
                console.log('Modal shown');
            }
        });
    });

    // Close button
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            console.log('Close button clicked');
            modal.classList.remove('show');
        });
    }

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Outside click detected');
            modal.classList.remove('show');
        }
    });

    // Keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            console.log('Escape key pressed');
            modal.classList.remove('show');
        }
    });

    // Prev/Next buttons
    const prevBtn = document.querySelector('.prev-modal');
    const nextBtn = document.querySelector('.next-modal');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Prev clicked');
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Next clicked');
        });
    }
});

/* ==================== MOBILE MENU ==================== */

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create mailto link with form data
        const mailtoLink = `mailto:agbezugeeugene@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Reset form
        // contactForm.reset();
    });
}

// Add active class to current nav link based on page
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            (item.getAttribute('href') === 'index.html' && currentLocation === '/') ||
            (item.getAttribute('href') === 'index.html' && currentLocation.endsWith('/'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Smooth scroll effect on navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations (for skill cards on about page)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active class to current nav link based on page
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            (item.getAttribute('href') === 'index.html' && currentLocation === '/') ||
            (item.getAttribute('href') === 'index.html' && currentLocation.endsWith('/'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Smooth scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items
portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

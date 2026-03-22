// Portfolio Lightbox/Modal Functionality
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.querySelector('.prev-modal');
const nextBtn = document.querySelector('.next-modal');
const portfolioItems = document.querySelectorAll('.portfolio-item');

let currentImageIndex = 0;
const images = [];

// Populate images array from portfolio items
portfolioItems.forEach((item) => {
    const imagePath = item.getAttribute('data-image');
    const title = item.getAttribute('data-title');
    if (imagePath) {
        images.push({
            src: imagePath,
            title: title
        });
    }
});

// Open modal when portfolio item is clicked
portfolioItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openModal(index);
    });
});

function openModal(index) {
    if (images[index]) {
        modalImage.src = images[index].src;
        modalCaption.textContent = images[index].title;
        modal.classList.add('show');
    }
}

function closeImageModal() {
    modal.classList.remove('show');
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    openModal(currentImageIndex);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    openModal(currentImageIndex);
}

// Event listeners for modal controls
closeModal.addEventListener('click', closeImageModal);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeImageModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('show')) {
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') closeImageModal();
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

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const contactForm = document.getElementById('contactForm');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    navAnchors.forEach((anchor) => {
        anchor.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('open');
        });
    });

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach((item) => {
                const category = item.dataset.category;
                const showItem = filter === 'all' || category === filter;
                item.classList.toggle('hidden', !showItem);
            });
        });
    });

    portfolioItems.forEach((item) => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img');
            const title = item.querySelector('h3')?.textContent || 'Portfolio preview';

            if (!image || !lightbox || !lightboxImage || !lightboxCaption) return;

            lightboxImage.src = image.getAttribute('src');
            lightboxImage.alt = image.getAttribute('alt') || title;
            lightboxCaption.textContent = title;
            lightbox.classList.add('show');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    if (lightbox && lightboxClose) {
        const closeLightbox = () => {
            lightbox.classList.remove('show');
            lightbox.setAttribute('aria-hidden', 'true');
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeLightbox();
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const subject = document.getElementById('subject')?.value || 'Project inquiry';
            const message = document.getElementById('message')?.value || '';

            const body = `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`;
            const mailtoLink = `mailto:agbezugeeugene@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;
        });
    }

    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = entry.target.getAttribute('id');
                navAnchors.forEach((anchor) => {
                    anchor.classList.toggle('active', anchor.getAttribute('href') === `#${id}`);
                });
            });
        },
        { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
});

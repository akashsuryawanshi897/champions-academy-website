/**
 * The Champions Academy - Main JavaScript
 * This file handles all common functionality for the website.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header & Scroll Top Visibility
    const header = document.getElementById('main-header');
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled-header', 'py-1');
            header.classList.remove('py-4');
            scrollTopBtn.classList.remove('hidden');
            scrollTopBtn.classList.add('flex');
        } else {
            header.classList.remove('scrolled-header', 'py-1');
            header.classList.add('py-4');
            scrollTopBtn.classList.add('hidden');
            scrollTopBtn.classList.remove('flex');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. Mobile Sidebar Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');

    if (mobileMenuBtn && mobileSidebar && closeSidebarBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileSidebar.style.left = '0';
            mobileOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        });

        const closeSidebarFunc = () => {
            mobileSidebar.style.left = '-300px';
            mobileOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto'; 
        };

        closeSidebarBtn.addEventListener('click', closeSidebarFunc);
        mobileOverlay.addEventListener('click', closeSidebarFunc);

        // Sidebar Sub-menu toggles
        const sidebarSubBtns = mobileSidebar.querySelectorAll('button');
        sidebarSubBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const nextDiv = btn.nextElementSibling;
                const span = btn.querySelector('span');
                if (nextDiv && nextDiv.classList.contains('hidden')) {
                    nextDiv.classList.remove('hidden');
                    nextDiv.classList.add('flex');
                    if(span) span.textContent = '-';
                } else if (nextDiv) {
                    nextDiv.classList.add('hidden');
                    nextDiv.classList.remove('flex');
                    if(span) span.textContent = '+';
                }
            });
        });
    }

    // 3. Hero Slider logic (index.html only)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        const dots = document.querySelectorAll('.hero-slider button');

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('opacity-100', i === index);
                slide.classList.toggle('opacity-0', i !== index);
                if (dots[i]) {
                    dots[i].classList.toggle('opacity-100', i === index);
                    dots[i].classList.toggle('opacity-30', i !== index);
                }
            });
        };

        let slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }, 5000);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                // Reset interval on manual change
                clearInterval(slideInterval);
                slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    showSlide(currentSlide);
                }, 5000);
            });
        });
    }

    // 4. Form Submission Handling (admission and contact)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Success! Your message has been sent. We will get back to you shortly.');
                form.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });

    // 5. Scroll Animations (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.course-card, .stat-card, h3, h2, .about-text, .reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
    animateElements.forEach(el => observer.observe(el));

    // 6. Animated Counters
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                const suffix = entry.target.getAttribute('data-suffix') || '';
                let current = 0;
                const increment = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = current.toLocaleString() + suffix;
                }, 30);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(c => counterObserver.observe(c));

    // 7. Auth Check & Header Animation
    const checkAuthStatus = async () => {
        try {
            const res = await fetch('/api/auth/profile');
            const authLinks = document.getElementById('auth-links');
            const userInfo = document.getElementById('user-info');
            const mobileAuthLinks = document.getElementById('mobile-auth-links');

            if (res.ok) {
                const user = await res.json();
                if(authLinks) authLinks.classList.add('hidden');
                if(userInfo) userInfo.classList.remove('hidden');
                if(userInfo) userInfo.classList.add('flex');
                
                if (mobileAuthLinks) {
                    mobileAuthLinks.innerHTML = `
                        <a href="dashboard.html" class="text-center py-4 bg-navy text-white rounded-xl text-sm tracking-widest font-bold uppercase shadow-xl hover:bg-primary transition-all duration-300">Go to Dashboard</a>
                    `;
                }
            }
        } catch (err) {
            console.log('User not logged in');
        }
    };
    checkAuthStatus();
    // 8. Callback Form Handler
    const cbForm = document.getElementById('callbackForm');
    if (cbForm) {
        cbForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('cbSubmitBtn');
            const msg = document.getElementById('cbMessage');
            btn.disabled = true;
            btn.textContent = 'Sending...';
            
            try {
                const res = await fetch('/api/contact/callback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: document.getElementById('cbName').value,
                        phone: document.getElementById('cbPhone').value,
                        course: document.getElementById('cbCourse').value
                    })
                });
                if (res.ok) {
                    msg.textContent = 'Request Sent!';
                    msg.className = 'mt-4 p-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest bg-green-100 text-green-700';
                    msg.classList.remove('hidden');
                    setTimeout(() => { closeCallbackModal(); cbForm.reset(); msg.classList.add('hidden'); }, 2000);
                }
            } catch (err) {
                msg.textContent = 'Error sending.';
                msg.className = 'mt-4 p-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest bg-red-100 text-red-700';
                msg.classList.remove('hidden');
            } finally {
                btn.disabled = false;
                btn.textContent = 'Submit Request';
            }
        });
    }
});

// Modal Handlers
function openCallbackModal() {
    const modal = document.getElementById('callbackModal');
    if(modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
}
function closeCallbackModal() {
    const modal = document.getElementById('callbackModal');
    if(modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
}
function showFacilityInfo(title, subtitle, desc, img) {
    const modal = document.getElementById('infoModal');
    if(!modal) return;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = subtitle;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalImg').src = img;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}
function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if(modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
}

// Custom Animation Class (Inject styles via JS if not in CSS)
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(styleSheet);

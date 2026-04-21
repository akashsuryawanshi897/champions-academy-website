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
            if (scrollTopBtn) {
                scrollTopBtn.classList.remove('hidden');
                scrollTopBtn.classList.add('flex');
            }
        } else {
            header.classList.remove('scrolled-header', 'py-1');
            header.classList.add('py-4');
            if (scrollTopBtn) {
                scrollTopBtn.classList.add('hidden');
                scrollTopBtn.classList.remove('flex');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

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
            mobileSidebar.style.left = '-320px';
            mobileOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto'; 
        };

        closeSidebarBtn.addEventListener('click', closeSidebarFunc);
        mobileOverlay.addEventListener('click', closeSidebarFunc);
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

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                clearInterval(slideInterval);
                slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    showSlide(currentSlide);
                }, 5000);
            });
        });
    }

    // 4. Form Submission Handling
    const forms = document.querySelectorAll('form:not(#loginForm):not(#registerForm):not(#applyForm):not(#announcementForm):not(#callbackForm)');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            if(!submitBtn) return;
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Success! Your message has been sent. We will get back to you shortly.');
                form.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });

    // 5. Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active', 'animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

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
    const checkAuthStatus = () => {
        try {
            const authLinksShared = document.getElementById('auth-links-shared');
            const authLinks = document.getElementById('auth-links');
            const userInfo = document.getElementById('user-info');
            const userInfoShared = document.getElementById('user-info-shared');
            const mobileAuthLinks = document.getElementById('mobile-auth-links');
            const mobilePlaceholder = document.getElementById('mobile-auth-links-placeholder');

            if (window.MockAuth && window.MockAuth.isLoggedIn()) {
                const user = window.MockAuth.getCurrentUser();
                const dashUrl = user.role === 'admin' ? 'admin-dashboard.html' : 'dashboard.html';

                if(authLinksShared) authLinksShared.classList.add('hidden');
                if(authLinks) authLinks.classList.add('hidden');
                if(userInfo) userInfo.classList.remove('hidden');
                if(userInfoShared) userInfoShared.classList.remove('hidden');
                
                const dashLink = document.getElementById('dash-link');
                const dashLinkShared = document.getElementById('dash-link-shared');
                if (dashLink) dashLink.href = dashUrl;
                if (dashLinkShared) dashLinkShared.href = dashUrl;
                
                const mobileHtml = `
                    <div class="flex flex-col gap-3">
                        <a href="${dashUrl}" class="text-center py-4 bg-navy text-white rounded-xl text-sm tracking-widest font-bold uppercase shadow-xl hover:bg-primary transition-all duration-300">📊 Go to Dashboard</a>
                        <button onclick="logout()" class="text-center py-4 bg-red-600 text-white rounded-xl text-sm tracking-widest font-bold uppercase shadow-xl hover:bg-red-700 transition-all duration-300">🚪 Logout</button>
                    </div>
                `;
                if (mobileAuthLinks) mobileAuthLinks.innerHTML = mobileHtml;
                if (mobilePlaceholder) mobilePlaceholder.innerHTML = mobileHtml;
                
            } else {
                if(authLinksShared) authLinksShared.classList.remove('hidden');
                if(authLinks) authLinks.classList.remove('hidden');
                if(userInfo) userInfo.classList.add('hidden');
                if(userInfoShared) userInfoShared.classList.add('hidden');

                const guestMobileHtml = `
                    <a href="login.html" class="bg-[#000080] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#FF9933] transition-all">Account Login</a>
                    <a href="admission.html" class="bg-[#138808] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#000080] transition-all">Join Now</a>
                `;
                if (mobilePlaceholder) mobilePlaceholder.innerHTML = guestMobileHtml;
                if (mobileAuthLinks) mobileAuthLinks.innerHTML = guestMobileHtml;
            }
        } catch (err) {
            console.log('Auth check error:', err);
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
                setTimeout(() => {
                    msg.textContent = 'Request Sent!';
                    msg.className = 'mt-4 p-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest bg-green-100 text-green-700';
                    msg.classList.remove('hidden');
                    setTimeout(() => { 
                        if(typeof closeCallbackModal === 'function') closeCallbackModal(); 
                        cbForm.reset(); 
                        msg.classList.add('hidden'); 
                    }, 2000);
                    btn.disabled = false;
                    btn.textContent = 'Submit Request';
                }, 1000);
            } catch (err) {
                msg.textContent = 'Error sending.';
                msg.className = 'mt-4 p-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest bg-red-100 text-red-700';
                msg.classList.remove('hidden');
                btn.disabled = false;
                btn.textContent = 'Submit Request';
            }
        });
    }
});

// Global helper for mobile sidebar accordions
window.toggleMobileAccordion = function(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('span');
    if (!content || !icon) return;
    
    const isHidden = content.classList.contains('hidden');
    
    if (isHidden) {
        content.classList.remove('hidden');
        content.classList.add('flex');
        icon.textContent = '−';
    } else {
        content.classList.add('hidden');
        content.classList.remove('flex');
        icon.textContent = '+';
    }
};

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

function logout() {
    if(window.MockAuth) {
        window.MockAuth.logout();
        window.location.href = 'index.html';
    }
}

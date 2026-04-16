/**
 * The Champions Academy - Shared UI Components
 * Centralized Header, Sidebar, Footer, and Modals to ensure consistency and minimize codebase.
 */

const SHARED_NAV = `
    <div class="fixed top-0 left-0 w-full z-50">
        <!-- Top Bar with Marquee -->
        <div class="bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] text-[#000080] py-2 marquee-container font-bold relative shadow-md overflow-hidden">
            <div class="marquee-content whitespace-nowrap inline-block animate-marquee px-4">
                Discover your true potential with our free expert counseling today. • Admissions Open for 2026 Batches! • Join the most successful Police training academy! • Special Physical Training classes started. •  • .
            </div>
        </div>

        <!-- Header / Navigation -->
        <header class="glass-nav transition-all duration-300 border-b border-gray-100 bg-white/95 backdrop-blur-md" id="main-header">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center transition-all duration-300" id="nav-container">
            <a href="index.html" class="flex items-center">
                <img src="assets/images/logo.png" alt="The Champions Academy" class="h-8 md:h-10 lg:h-12 object-contain transition-all duration-300" id="nav-logo">
            </a>
            
            <!-- Desktop Nav -->
            <nav class="hidden xl:flex gap-8 font-extrabold items-center text-[11px] uppercase tracking-[0.1em] text-[#000080]">
                <a href="index.html" class="nav-link hover:text-[#FF9933] transition">Home</a>
                <div class="relative group">
                    <button class="nav-link hover:text-[#FF9933] transition flex items-center gap-1 uppercase">About <span class="text-[8px]">▼</span></button>
                    <div class="absolute left-0 top-full bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#FF9933] transform translate-y-4 group-hover:translate-y-0 py-3 w-64">
                        <a href="about.html" class="dropdown-link group/item">About Academy <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                        <a href="facilities.html" class="dropdown-link group/item">Our Facilities <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                        <a href="eligibility-criteria.html" class="dropdown-link group/item">Eligibility Criteria <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                        <a href="exam.html" class="dropdown-link group/item">Exam Information <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                    </div>
                </div>
                <div class="relative group">
                    <button class="nav-link hover:text-[#FF9933] transition flex items-center gap-1 uppercase">Courses <span class="text-[8px]">▼</span></button>
                    <div class="absolute left-0 top-full bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#FF9933] transform translate-y-4 group-hover:translate-y-0 py-3 w-80 overflow-y-auto max-h-[75vh]">
                        <div class="px-6 py-2 bg-gray-50 text-[9px] tracking-widest text-[#FF9933] font-black italic">MPSC / UPSC Programs</div>
                        <a href="psi-2.html" class="dropdown-link">PSI Recruitment</a>
                        <a href="sti.html" class="dropdown-link">STI Recruitment</a>
                        <a href="aso.html" class="dropdown-link">ASO Recruitment</a>
                        <div class="h-px bg-gray-100 my-2"></div>
                        <div class="px-6 py-2 bg-gray-50 text-[9px] tracking-widest text-[#FF9933] font-black italic">Defense Recruitment</div>
                        <a href="police-recruitment.html" class="dropdown-link">Police Bharti</a>
                        <a href="army-recruitment.html" class="dropdown-link">Army (Agniveer)</a>
                        <a href="rpf.html" class="dropdown-link">RPF Recruitment</a>
                        <div class="h-px bg-gray-100 my-2"></div>
                        <div class="px-6 py-2 bg-gray-50 text-[9px] tracking-widest text-[#FF9933] font-black italic">State Govt Exams</div>
                        <a href="talathi-recruitment-training-program.html" class="dropdown-link">Talathi Training</a>
                        <a href="gramsevak-recruitment.html" class="dropdown-link">Gramsevak Recruitment</a>
                    </div>
                </div>
                <a href="facilities.html" class="nav-link hover:text-[#FF9933] transition uppercase">Facilities</a>
                <a href="gallery.html" class="nav-link hover:text-[#FF9933] transition uppercase">Gallery</a>
                <a href="contact.html" class="nav-link hover:text-[#FF9933] transition uppercase">Contact</a>
            </nav>
            
            <div class="flex items-center gap-4">
                <div id="auth-links-shared" class="hidden sm:flex items-center gap-2">
                    <a href="login.html" class="btn-glow bg-[#000080] text-white px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#FF9933] transition-all shadow-xl shadow-blue-500/20">🔑 Login</a>
                </div>
                <a href="admission.html" class="btn-glow bg-[#FF9933] text-white px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#000080] transition-all shadow-xl shadow-orange-500/20">Apply Now</a>
                <button class="xl:hidden text-2xl p-2 h-12 w-12 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-all" id="mobile-menu-btn-shared">☰</button>
            </div>
        </div>
    </header>

    <!-- Sidebar Mobile Menu -->
    <div class="fixed inset-0 bg-[#1A1A2E]/90 backdrop-blur-sm z-[60] hidden transition-opacity duration-300" id="mobile-overlay-shared"></div>
    <div class="fixed top-0 left-[-320px] bottom-0 w-[320px] bg-white z-[70] transition-all duration-500 shadow-2xl p-8 flex flex-col overflow-y-auto" id="mobile-sidebar-shared">
        <div class="flex justify-between items-center mb-10">
            <img src="assets/images/logo.png" alt="Logo" class="h-10 object-contain">
            <button class="text-3xl text-[#000080] hover:text-[#FF9933] transition" id="close-sidebar-btn-shared">×</button>
        </div>
        <nav class="flex flex-col gap-1 font-extrabold text-sm uppercase tracking-wide">
            <a href="index.html" class="py-4 border-b border-gray-50 text-[#000080] hover:text-[#FF9933] transition">Home</a>
            <div class="py-4 border-b border-gray-50 text-[#000080]">
                <button class="flex justify-between items-center w-full uppercase" onclick="this.nextElementSibling.classList.toggle('hidden')">About <span class="text-orange-500">+</span></button>
                <div class="hidden flex-col pl-4 gap-3 mt-4 text-[11px] font-semibold text-gray-500">
                    <a href="about.html" class="hover:text-[#FF9933]">About Us</a>
                    <a href="facilities.html" class="hover:text-[#FF9933]">Facilities</a>
                    <a href="eligibility-criteria.html" class="hover:text-[#FF9933]">Eligibility</a>
                </div>
            </div>
            <a href="gallery.html" class="py-4 border-b border-gray-50 text-[#000080] hover:text-[#FF9933] transition">Gallery</a>
            <a href="contact.html" class="py-4 border-b border-gray-50 text-[#000080] hover:text-[#FF9933] transition">Contact Us</a>
            
            <div class="mt-10 flex flex-col gap-4">
                <a href="login.html" class="bg-[#000080] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#FF9933] transition-all">Account Login</a>
                <a href="admission.html" class="bg-[#138808] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#000080] transition-all">Register Now</a>
            </div>
        </nav>
    </div>
`;

const SHARED_MODALS = `
    <!-- Callback Modal -->
    <div id="callbackModal" class="fixed inset-0 bg-[#000080]/80 backdrop-blur-md z-[100] hidden items-center justify-center p-4">
        <div class="bg-white max-w-md w-full rounded-3xl overflow-hidden shadow-2xl p-8 relative">
            <button onclick="closeCallbackModal()" class="absolute top-4 right-4 text-gray-400 hover:text-[#000080] text-2xl">×</button>
            <div class="text-center mb-6">
                <h4 class="text-xl font-black text-[#000080] uppercase tracking-tighter">Request a Callback</h4>
                <p class="text-gray-500 text-xs mt-2 uppercase tracking-widest">We'll reach out within 24 hours.</p>
            </div>
            <form id="callbackForm" class="space-y-4">
                <input type="text" id="cbName" placeholder="Full Name" class="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#FF9933] outline-none transition rounded-xl font-semibold" required>
                <input type="tel" id="cbPhone" placeholder="Mobile Number" class="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#FF9933] outline-none transition rounded-xl font-semibold" required>
                <select id="cbCourse" class="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#FF9933] outline-none transition rounded-xl font-semibold">
                    <option>Police Bharti</option>
                    <option>Army Training</option>
                    <option>PSI Batch</option>
                    <option>General Enquiry</option>
                </select>
                <button type="submit" id="cbSubmitBtn" class="w-full bg-[#FF9933] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#000080] transition-all shadow-xl shadow-orange-500/20">Submit Request</button>
            </form>
            <div id="cbMessage" class="hidden mt-4 p-3 rounded-xl text-center text-[10px] font-black uppercase tracking-widest"></div>
        </div>
    </div>

    <!-- Info Modal (Shared) -->
    <div id="infoModal" class="fixed inset-0 bg-[#000080]/90 backdrop-blur-xl z-[150] hidden items-center justify-center p-4">
        <div class="bg-white max-w-2xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <button onclick="closeInfoModal()" class="absolute top-6 right-6 w-10 h-10 bg-gray-100 text-gray-400 hover:text-[#000080] rounded-full flex items-center justify-center text-xl z-20">×</button>
            <div class="grid md:grid-cols-2">
                <div class="h-48 md:h-auto">
                    <img id="modalImg" src="" alt="Detail" class="w-full h-full object-cover">
                </div>
                <div class="p-10 flex flex-col justify-center">
                    <span id="modalSubtitle" class="text-[10px] font-black text-[#FF9933] uppercase tracking-widest mb-3 italic">Our Excellence</span>
                    <h4 id="modalTitle" class="text-2xl font-black text-[#000080] mb-5 uppercase leading-none">Details</h4>
                    <p id="modalDesc" class="text-gray-500 text-sm leading-relaxed mb-8">Loading info...</p>
                    <a id="modalAction" href="admission.html" class="bg-[#000080] text-center text-white py-4 px-8 rounded-xl font-black uppercase tracking-widest hover:bg-[#FF9933] transition-all self-start text-[10px]">Enquiry Now</a>
                </div>
            </div>
        </div>
    </div>
`;

const SHARED_FOOTER = `
    <footer class="bg-[#1A1A2E] pt-24 pb-12 text-white border-t-8 border-[#FF9933] mt-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#FF9933]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            <div class="space-y-8">
                <img src="assets/images/logo.png" alt="Logo" class="h-12 drop-shadow-xl">
                <p class="text-gray-400 text-sm leading-relaxed">Disciplined training, proper guidance, and consistent practice ensure the success of every student at The Champions Academy.</p>
                <div class="flex gap-3">
                    <a href="#" class="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">f</a>
                    <a href="#" class="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">t</a>
                    <a href="#" class="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">i</a>
                </div>
            </div>
            <div>
                <h4 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-[#FF9933] border-b border-white/5 pb-4">Our Academy</h4>
                <ul class="space-y-5">
                    <li><a href="about.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">About Us</a></li>
                    <li><a href="facilities.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">Facilities</a></li>
                    <li><a href="admission.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">Admissions</a></li>
                    <li><a href="gallery.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">Gallery</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-[#FF9933] border-b border-white/5 pb-4">Course Links</h4>
                <ul class="space-y-5">
                    <li><a href="police-recruitment.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">Police Bharti</a></li>
                    <li><a href="army-recruitment.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">Army Recruitment</a></li>
                    <li><a href="psi-2.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">PSI Recruitment</a></li>
                    <li><a href="talathi-recruitment-training-program.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group">Talathi Training</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-[#FF9933] border-b border-white/5 pb-4">Contact Info</h4>
                <p class="text-white text-sm mb-4">Office No. 46/390, In front of YCM High Tech Nagar, Abhiyanmadhye Dalal Joshi, Opposite Holkar, Sant Tukaram Nagar, Pimpri - 18.</p>
                <p class="text-white text-sm mb-4">Office No. 46/390, In front of YCM High Tech Nagar, Abhiyanmadhye Dalal Joshi, Opposite Holkar, Sant Tukaram Nagar, Pimpri - 18.</p>
                <p class="text-[#FF9933] font-black text-base mb-2">+91 84844001141 / +91 8484842737</p>
                <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold">info@champions.com</p>
            </div>
        </div>
        <div class="h-px bg-white/5 my-20 container mx-auto text-center">
            <p class="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-black pt-10">&copy; 2026 THE CHAMPIONS ACADEMY. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
`;

// Logic to inject the components
(function() {
    function injectUI() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');
        
        if (headerPlaceholder && !headerPlaceholder.innerHTML.trim()) {
            headerPlaceholder.innerHTML = SHARED_NAV;
            
            // Mobile Menu Bindings
            const mobileBtn = document.getElementById('mobile-menu-btn-shared');
            const mobileOverlay = document.getElementById('mobile-overlay-shared');
            const mobileSidebar = document.getElementById('mobile-sidebar-shared');
            const closeBtn = document.getElementById('close-sidebar-btn-shared');

            if(mobileBtn && mobileSidebar && mobileOverlay && closeBtn) {
                const toggleMenu = (show) => {
                    if(show) {
                        mobileSidebar.style.left = '0';
                        mobileOverlay.classList.remove('hidden');
                        document.body.style.overflow = 'hidden';
                    } else {
                        mobileSidebar.style.left = '-320px';
                        mobileOverlay.classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                };

                mobileBtn.addEventListener('click', () => toggleMenu(true));
                closeBtn.addEventListener('click', () => toggleMenu(false));
                mobileOverlay.addEventListener('click', () => toggleMenu(false));
            }
        }
        
        if (footerPlaceholder && !footerPlaceholder.innerHTML.trim()) {
            footerPlaceholder.innerHTML = SHARED_FOOTER + SHARED_MODALS;
        }

        // Re-inject scroll top button if missing
        if(!document.getElementById('scroll-top')) {
            const btn = document.createElement('button');
            btn.id = 'scroll-top';
            btn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-[#138808] text-white rounded-full hidden items-center justify-center shadow-2xl hover:-translate-y-2 transition duration-300 z-50';
            btn.innerHTML = '↑';
            document.body.appendChild(btn);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectUI);
    } else {
        injectUI();
    }
    
    // Safety check for asynchronous injection
    setTimeout(injectUI, 100);
})();

// Global Modal Functions
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
    
    // Fix image extension if needed in modal as well
    let fixedImg = img.replace('.jpg', '.png');
    if (img.includes('av-hall') || img.includes('avhall')) fixedImg = 'assets/images/f3.png';
    if (img.includes('gym')) fixedImg = 'assets/images/f4.png';
    if (img.includes('library')) fixedImg = 'assets/images/modern-library.png';
    
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = subtitle;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalImg').src = fixedImg;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}
function showFacultyInfo(name, role, desc, img) {
    showFacilityInfo(name, role, desc, img);
}
function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if(modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
}
function closeFacultyModal() { closeInfoModal(); }

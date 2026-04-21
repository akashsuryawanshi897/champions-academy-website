/**
 * The Champions Academy - Shared UI Components
 * Centralized Header, Sidebar, Footer, and Modals to ensure consistency and minimize codebase.
 */

const SHARED_NAV = `
    <div class="fixed top-0 left-0 w-full z-50">
        <!-- Top Bar with Marquee -->
        <div class="bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] text-[#000080] py-2 marquee-container font-bold relative shadow-md overflow-hidden">
            <div class="marquee-content whitespace-nowrap inline-block animate-marquee px-4">
                🏆 Build Strength. Build Discipline. Become a Champion! • Admissions Open for 2026 Batches! • 10+ Years of Excellence • 3000+ Days Ground Presence • 100% Physical Test Success Rate • Join The Champions Academy Today!
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
                        <a href="facilities.html" class="dropdown-link group/item">Facilities <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                        <a href="gallery.html" class="dropdown-link group/item">Gallery <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                        <a href="eligibility-criteria.html" class="dropdown-link group/item">Eligibility Criteria <span class="float-right opacity-0 group-hover/item:opacity-100 transition">→</span></a>
                    </div>
                </div>
                <div class="relative group">
                    <button class="nav-link hover:text-[#FF9933] transition flex items-center gap-1 uppercase">Courses <span class="text-[8px]">▼</span></button>
                    <div class="absolute left-0 top-full bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#FF9933] transform translate-y-4 group-hover:translate-y-0 py-3 w-80 overflow-y-auto max-h-[75vh]">
                        <div class="px-6 py-2 bg-gray-50 text-[9px] tracking-widest text-[#FF9933] font-black italic">Police & Defense</div>
                        <a href="police-recruitment.html" class="dropdown-link">Police Bharti</a>
                        <a href="army-recruitment.html" class="dropdown-link">Army Bharti</a>
                        <a href="forest-service-recruitment.html" class="dropdown-link">Vansevak / Vanrakshak</a>
                        <div class="h-px bg-gray-100 my-2"></div>
                        <div class="px-6 py-2 bg-gray-50 text-[9px] tracking-widest text-[#FF9933] font-black italic">Government Exams</div>
                        <a href="talathi-recruitment-training-program.html" class="dropdown-link">Talathi</a>
                        <a href="clerk-typist-recruitment.html" class="dropdown-link">Clerk</a>
                        <a href="gramsevak-recruitment.html" class="dropdown-link">Mahanagar Palika</a>
                        <a href="ssc-recruitment.html" class="dropdown-link">SSC CGL</a>
                        <div class="h-px bg-gray-100 my-2"></div>
                        <div class="px-6 py-2 bg-gray-50 text-[9px] tracking-widest text-[#FF9933] font-black italic">Foundation Courses</div>
                        <a href="psi-2.html" class="dropdown-link">UPSC Foundation</a>
                        <a href="sti.html" class="dropdown-link">MPSC Foundation</a>
                    </div>
                </div>
                <a href="admission.html" class="nav-link hover:text-[#FF9933] transition uppercase">Admission</a>
                <a href="contact.html" class="nav-link hover:text-[#FF9933] transition uppercase">Contact</a>
            </nav>
            
            <div class="flex items-center gap-2 md:gap-3 flex-nowrap">
                <!-- Google Translate -->
                <div id="google_translate_element" class="translate-widget ml-2"></div>
                
                <!-- Guest State -->
                <div id="auth-links-shared" class="flex items-center gap-2">
                    <a href="login.html" class="btn-glow bg-[#000080] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-bold uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-[#FF9933] transition-all shadow-xl shadow-blue-500/20 whitespace-nowrap">🔑 Login</a>
                    <a href="admission.html" class="btn-glow bg-[#FF9933] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-bold uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-[#000080] transition-all shadow-xl shadow-orange-500/20 whitespace-nowrap hidden sm:block">Join Now</a>
                </div>

                <!-- Auth State (Dropdown) -->
                <div id="user-info-shared" class="hidden relative group">
                    <button class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-100 font-bold text-[10px] uppercase tracking-wider text-navy hover:border-primary transition-all">
                        👤 My Account <span class="text-[8px] opacity-60">▼</span>
                    </button>
                    <div class="absolute right-0 top-full mt-2 w-48 bg-white shadow-2xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-50 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <a href="dashboard.html" id="dash-link-shared" class="block px-6 py-2.5 text-[11px] font-bold text-gray-700 hover:text-primary hover:bg-orange-50 transition border-b border-gray-50 uppercase tracking-wider">📊 Dashboard</a>
                        <a href="admission.html" class="block px-6 py-2.5 text-[11px] font-bold text-gray-700 hover:text-primary hover:bg-orange-50 transition border-b border-gray-50 uppercase tracking-wider">📝 Apply Now</a>
                        <button onclick="logout()" class="w-full text-left px-6 py-2.5 text-[11px] font-bold text-red-500 hover:bg-red-50 transition uppercase tracking-wider">🚪 Logout</button>
                    </div>
                </div>

                <button class="xl:hidden text-2xl p-2 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-all" id="mobile-menu-btn-shared">☰</button>
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
                    <a href="gallery.html" class="hover:text-[#FF9933]">Gallery</a>
                    <a href="eligibility-criteria.html" class="hover:text-[#FF9933]">Eligibility</a>
                </div>
            </div>
            <div class="py-4 border-b border-gray-50 text-[#000080]">
                <button class="flex justify-between items-center w-full uppercase" onclick="this.nextElementSibling.classList.toggle('hidden')">Courses <span class="text-orange-500">+</span></button>
                <div class="hidden flex-col pl-4 gap-3 mt-4 text-[11px] font-semibold text-gray-500">
                    <span class="text-[#FF9933] text-[10px] font-black">Police & Defense</span>
                    <a href="police-recruitment.html" class="hover:text-[#FF9933]">Police Bharti</a>
                    <a href="army-recruitment.html" class="hover:text-[#FF9933]">Army Bharti</a>
                    <a href="forest-service-recruitment.html" class="hover:text-[#FF9933]">Vansevak / Vanrakshak</a>
                    <span class="text-[#FF9933] text-[10px] font-black mt-2">Govt Exams</span>
                    <a href="talathi-recruitment-training-program.html" class="hover:text-[#FF9933]">Talathi</a>
                    <a href="clerk-typist-recruitment.html" class="hover:text-[#FF9933]">Clerk</a>
                    <a href="ssc-recruitment.html" class="hover:text-[#FF9933]">SSC CGL</a>
                    <span class="text-[#FF9933] text-[10px] font-black mt-2">Foundation</span>
                    <a href="psi-2.html" class="hover:text-[#FF9933]">UPSC Foundation</a>
                    <a href="sti.html" class="hover:text-[#FF9933]">MPSC Foundation</a>
                </div>
            </div>
            <a href="admission.html" class="py-4 border-b border-gray-50 text-[#000080] hover:text-[#FF9933] transition">Admission</a>
            <a href="contact.html" class="py-4 border-b border-gray-50 text-[#000080] hover:text-[#FF9933] transition">Contact Us</a>
            
            <div id="mobile-auth-links-placeholder" class="mt-10 flex flex-col gap-4">
                <a href="login.html" class="bg-[#000080] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#FF9933] transition-all">Account Login</a>
                <a href="admission.html" class="bg-[#138808] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#000080] transition-all">Join Now</a>
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
                    <option>Army Bharti</option>
                    <option>Vansevak / Vanrakshak</option>
                    <option>Talathi / Clerk</option>
                    <option>SSC CGL</option>
                    <option>UPSC Foundation</option>
                    <option>MPSC Foundation</option>
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
                <p class="text-gray-400 text-sm leading-relaxed">At The Champions Academy, we don't just prepare you for exams—we prepare you for life. 10+ years of dedicated training.</p>
                <div class="flex gap-3">
                    <a href="#" class="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#FF9933] hover:border-[#FF9933] transition-all">IG</a>
                    <a href="#" class="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all">YT</a>
                    <a href="https://wa.me/918484400114" class="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all">WA</a>
                </div>
            </div>
            <div>
                <h4 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-[#FF9933] border-b border-white/5 pb-4">Our Academy</h4>
                <ul class="space-y-5">
                    <li><a href="about.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold">About Us</a></li>
                    <li><a href="admission.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold">Admissions</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-[#FF9933] border-b border-white/5 pb-4">Course Links</h4>
                <ul class="space-y-5">
                    <li><a href="police-recruitment.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold">Police Bharti</a></li>
                    <li><a href="army-recruitment.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold">Army Bharti</a></li>
                    <li><a href="ssc-recruitment.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold">SSC CGL</a></li>
                    <li><a href="talathi-recruitment-training-program.html" class="text-gray-400 hover:text-white transition text-xs uppercase tracking-widest font-semibold">Talathi Training</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-black uppercase text-[10px] tracking-[0.2em] mb-10 text-[#FF9933] border-b border-white/5 pb-4">Contact Info</h4>
                <p class="text-white text-sm mb-4">Jay Ganesh Apartment, Near Vrushali Hotel, Opp. Nav Maharashtra College, Pimpri Gaon, Pune – 411018</p>
                <p class="text-[#FF9933] font-black text-base mb-2">+91 84844 00114 / +91 84848 42737</p>
                <p class="text-gray-500 text-[10px] uppercase tracking-widest font-bold">info@championsacademy.in</p>
            </div>
        </div>
        <div class="h-px bg-white/5 my-20 container mx-auto text-center">
            <p class="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-black pt-10">&copy; 2026 THE CHAMPIONS ACADEMY. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/918484400114" target="_blank" style="position:fixed;bottom:24px;left:24px;z-index:999;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 30px rgba(37,211,102,0.4);transition:all 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
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

            // ===== AUTH UI TOGGLE (SHARED) =====
            const checkAuth = () => {
                const user = window.MockAuth ? window.MockAuth.getSession() : null;
                const authLinks = document.getElementById('auth-links-shared');
                const userInfo = document.getElementById('user-info-shared');
                const mobilePlaceholder = document.getElementById('mobile-auth-links-placeholder');
                
                if (user) {
                    if (authLinks) authLinks.classList.add('hidden');
                    if (userInfo) userInfo.classList.remove('hidden');
                    
                    // Update dashboard link based on role
                    const dashUrl = (user.role === 'admin') ? 'admin-dashboard.html' : 'dashboard.html';
                    const dashLink = document.getElementById('dash-link-shared');
                    if (dashLink) dashLink.href = dashUrl;

                    // Update mobile nav
                    if (mobilePlaceholder) {
                        mobilePlaceholder.innerHTML = `
                            <a href="${dashUrl}" class="bg-[#000080] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#FF9933] transition-all">📊 Go to Dashboard</a>
                            <button onclick="logout()" class="bg-red-600 text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-red-700 transition-all">🚪 Logout</button>
                        `;
                    }
                } else {
                    if (authLinks) authLinks.classList.remove('hidden');
                    if (userInfo) userInfo.classList.add('hidden');
                    
                    // Reset mobile nav
                    if (mobilePlaceholder) {
                        mobilePlaceholder.innerHTML = `
                            <a href="login.html" class="bg-[#000080] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#FF9933] transition-all">Account Login</a>
                            <a href="admission.html" class="bg-[#138808] text-center p-4 rounded-xl text-white text-[10px] tracking-widest font-black uppercase shadow-xl hover:bg-[#000080] transition-all">Join Now</a>
                        `;
                    }
                }
            };
            // Run immediately and after a short delay to ensure mock-auth is ready
            checkAuth();
            setTimeout(checkAuth, 150);
        }
        
        // Inject Mock Auth script if not present
        if (!document.querySelector('script[src*="mock-auth.js"]')) {
            const authScript = document.createElement('script');
            authScript.src = 'mock-auth.js';
            document.head.appendChild(authScript);
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

        // Inject Google Translate script if not present
        if (!document.getElementById('google-translate-script')) {
            window.googleTranslateElementInit = function() {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,mr,hi',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            };
            const gtScript = document.createElement('script');
            gtScript.id = 'google-translate-script';
            gtScript.type = 'text/javascript';
            gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(gtScript);
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

const fs = require('fs');
const path = require('path');
const file = 'c:/Users/Admin/Desktop/champions-academy-website-master/admin-dashboard.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Sidebar Nav
html = html.replace(/(<a href="#" onclick="showSection\('gallery'\)" id="nav-gallery"[\s\S]*?<\/a>)/, `$1\n                <a href="#" onclick="showSection('training-action')" id="nav-training-action" class="flex items-center gap-3 p-3 rounded-xl text-gray-400 font-medium text-sm tracking-wide transition-all hover:bg-white/5">\n                    <span>🎥</span> Training Action\n                </a>`);

// 2. Mobile Nav
html = html.replace(/(<a href="#" onclick="showSection\('gallery'\);toggleMobileSidebar\(\)" class="flex items-center gap-3 p-3 rounded-xl text-gray-400 font-medium text-sm">🖼️ Gallery<\/a>)/, `$1\n            <a href="#" onclick="showSection('training-action');toggleMobileSidebar()" class="flex items-center gap-3 p-3 rounded-xl text-gray-400 font-medium text-sm">🎥 Training Action</a>`);

// 3. Section HTML
const sectionHTML = `
            <!-- ==================== TRAINING ACTION SECTION ==================== -->
            <div id="section-training-action" class="section p-6 lg:p-8 space-y-6 flex-1 overflow-y-auto hidden">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <h2 class="text-xl font-heading font-bold text-navy uppercase tracking-wider">Training Action Management</h2>
                    <button onclick="openTrainingActionModal()" class="bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-navy transition">+ Add Video/Reel</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="trainingActionAdminList">
                </div>
            </div>
`;
html = html.replace(/(<!-- ==================== SETTINGS SECTION ==================== -->)/, sectionHTML + '\n            $1');

// 4. Modal HTML
const modalHTML = `
    <!-- Training Action Modal -->
    <div id="trainingActionModal" class="modal-overlay">
        <div class="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative">
            <button onclick="closeTrainingActionModal()" class="absolute top-4 right-4 text-gray-400 hover:text-navy text-2xl">×</button>
            <h3 class="font-heading font-bold text-navy text-lg uppercase tracking-wider mb-6">Add Training Action</h3>
            <form id="trainingActionForm" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Embed Code / Link</label>
                    <textarea id="taEmbed" required placeholder="Paste YouTube/Instagram Iframe or Embed Code here..." class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary transition font-medium h-32"></textarea>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Type</label>
                    <select id="taType" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary bg-white font-medium">
                        <option value="YouTube">YouTube Video</option>
                        <option value="Instagram">Instagram Reel</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-primary text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-navy transition">Add Media</button>
            </form>
        </div>
    </div>
`;
html = html.replace(/(<!-- Confirm Modal -->)/, modalHTML + '\n    $1');

// 5. JavaScript
const jsLogic = `
        // ==================== TRAINING ACTION ====================
        function loadTrainingActionAdmin() {
            const list = document.getElementById('trainingActionAdminList');
            const media = JSON.parse(localStorage.getItem('ca_training_action_media') || '[]');
            if (media.length === 0) {
                list.innerHTML = '<div class="col-span-full py-12 text-center text-gray-400 bg-white rounded-2xl border border-gray-100 italic">No media added yet. Add YouTube/Instagram embeds to display on the homepage.</div>';
                return;
            }
            list.innerHTML = media.map(m => \`
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group relative flex flex-col">
                    <div class="h-48 bg-gray-100 flex items-center justify-center p-2 break-all overflow-hidden relative">
                        <div class="w-full h-full relative" style="pointer-events:none;">
                            \${m.embed}
                        </div>
                        <div class="absolute inset-0 bg-black/50 hidden items-center justify-center group-hover:flex transition">
                            <span class="text-white font-bold tracking-widest uppercase text-xs">\${m.type}</span>
                        </div>
                    </div>
                    <button onclick="deleteTrainingAction('\${m.id}')" class="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md hover:bg-red-700 opacity-0 group-hover:opacity-100 transition">×</button>
                </div>
            \`).join('');
        }

        function openTrainingActionModal() { document.getElementById('trainingActionModal').classList.add('active'); }
        function closeTrainingActionModal() { document.getElementById('trainingActionModal').classList.remove('active'); }

        document.getElementById('trainingActionForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const mediaList = JSON.parse(localStorage.getItem('ca_training_action_media') || '[]');
            mediaList.push({
                id: 'ta_' + Date.now(),
                embed: document.getElementById('taEmbed').value,
                type: document.getElementById('taType').value,
                addedAt: new Date().toISOString()
            });
            localStorage.setItem('ca_training_action_media', JSON.stringify(mediaList));
            showToast('✅ Media added', 'success');
            closeTrainingActionModal();
            document.getElementById('trainingActionForm').reset();
            loadTrainingActionAdmin();
        });

        function deleteTrainingAction(id) {
            let mediaList = JSON.parse(localStorage.getItem('ca_training_action_media') || '[]');
            mediaList = mediaList.filter(m => m.id !== id);
            localStorage.setItem('ca_training_action_media', JSON.stringify(mediaList));
            showToast('✅ Media deleted', 'success');
            loadTrainingActionAdmin();
        }

        // Add to initAdmin
`;

html = html.replace(/(loadGalleryAdmin\(\);)/, `$1\n            loadTrainingActionAdmin();`);
html = html.replace(/(\/\/ ==================== SETTINGS ====================)/, jsLogic + '\n        $1');

fs.writeFileSync(file, html, 'utf8');
console.log('Admin Dashboard updated successfully.');

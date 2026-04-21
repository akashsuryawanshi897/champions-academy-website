const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/Admin/Desktop/champions-academy-website-master';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (let file of files) {
    if (file === 'index.html' || file === 'gallery.html') continue;
    
    const filePath = path.join(dir, file);
    let text = fs.readFileSync(filePath, 'utf8');
    
    if (text.includes('components.js')) {
        // Find the <!-- Sidebar Mobile Menu --> and remove it
        // Note: some files might have slightly different spacing, but we can match from <!-- Sidebar to </div>\n
        const regex = /<!--\s*Sidebar Mobile Menu\s*-->[\s\S]*?id="mobile-sidebar"[\s\S]*?<\/nav>\s*<\/div>/;
        
        let newText = text.replace(regex, '');
        if (newText !== text) {
            fs.writeFileSync(filePath, newText, 'utf8');
            console.log('Fixed:', file);
        }
    }
}

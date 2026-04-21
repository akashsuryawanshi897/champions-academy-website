const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/Admin/Desktop/champions-academy-website-master';
const files = fs.readdirSync(directory);

files.forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        let modified = false;
        
        // Fix py-20 bg-dark sections
        if (content.includes('section class="bg-dark py-20 text-center')) {
            content = content.replace('section class="bg-dark py-20 text-center', 'section class="bg-dark py-20 pt-32 text-center');
            modified = true;
        }

        // Fix py-16 bg-gradient sections (admission etc if missed)
        if (content.includes('section class="py-16 bg-gradient-to-br from-dark via-navy to-dark')) {
            content = content.replace('section class="py-16 bg-gradient-to-br from-dark via-navy to-dark', 'section class="py-16 pt-32 bg-gradient-to-br from-dark via-navy to-dark');
            modified = true;
        }

        // Fix gallery py-14
        if (content.includes('section class="bg-white py-14 text-center')) {
            content = content.replace('section class="bg-white py-14 text-center', 'section class="bg-white py-14 pt-32 text-center');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Fixed: ${file}`);
        }
    }
});

const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

// Fix the missing image and replace the cards with interactive versions
const updatedContent = content
    .replace(/library-study\.png/g, 'modern-library.png')
    .replace(/<div class="speciality-card p-6 bg-white\/5 border border-white\/10 backdrop-blur-sm hover:border-primary\/50 hover:bg-white\/10">/g, 
        (match, offset) => {
            // This is a bit risky but we know the order or we can just make them all interactive with generic text
            // Better to match the unique h4 content
            return match;
        }
    );

// Actually I will just do a simple string replace for the specific blocks as they are exactly as I saw them in the file.
let finalContent = content.replace(/library-study\.png/g, 'modern-library.png');

// Manually replace each card to be safe
finalContent = finalContent.replace(
    /Physical Training<\/h4>\s*<p class="text-xs text-gray-400 leading-relaxed">Professional physical conditioning by ex-defense trainers.<\/p>\s*<\/div>/,
    `Physical Training</h4><p class="text-xs text-gray-400 leading-relaxed">Professional physical conditioning by ex-defense trainers.</p></div>`
);
// I will just use the simple replace for the image for now to fix the user's immediate PR, and then I'll add the clickable part via a more robust method.

fs.writeFileSync('index.html', finalContent);
console.log('Fixed digital library image.');

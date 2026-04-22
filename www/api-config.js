/**
 * Champions Academy - API Configuration
 * Ensures the app connects to the correct backend whether running locally, 
 * on Vercel, or as a native Android app.
 */
const API_BASE = (window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1' || 
                  window.location.protocol === 'file:') 
                 ? 'https://champions-academy-azure.vercel.app' 
                 : '';

// Export for use in other scripts if needed, or just keep as global
window.API_BASE = API_BASE;

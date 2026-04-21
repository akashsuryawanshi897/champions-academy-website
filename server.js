const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
let dbConnected = false;
connectDB().then(success => { dbConnected = success; });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Static Files
app.use(express.static(path.join(__dirname, '.'), {
    extensions: ['html', 'htm']
}));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'online', database: dbConnected ? 'connected' : 'disconnected' });
});

// DB availability guard
app.use('/api', (req, res, next) => {
    if (!dbConnected && req.path !== '/health') {
        return res.status(503).json({ message: 'Database offline. Ensure MongoDB is running.' });
    }
    next();
});

// Page Routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dashboard.html'));
});

// Catch-all for other html pages (if not caught by static)
app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    if (page.includes('.')) return next(); // Let static handle files with extensions
    const filePath = path.resolve(__dirname, `${page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) next();
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => console.log(`🚀 Server active on port ${PORT}`));
}


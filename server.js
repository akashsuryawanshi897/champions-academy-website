const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect to Database
let dbConnected = false;
connectDB().then(success => { dbConnected = success; });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
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

// For Vercel, static HTML files are handled natively by cleanUrls in vercel.json.
// This server only handles API requests.

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server active on port ${PORT}`));
}

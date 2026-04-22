const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { fullName, email, password, phone } = req.body;
        
        // Mock Registration for Testing
        if (email === 'test@example.com') {
            const token = jwt.sign({ user: { id: 'mock_user_123', role: 'user' } }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            return res.status(201).json({ message: 'User registered successfully (MOCK)', user: { fullName, email, role: 'user' } });
        }

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        console.log('Registering user:', email);
        user = new User({ fullName, email, password, phone });
        console.log('Attempting to save user to database...');
        await user.save();
        console.log('User saved successfully');

        const token = jwt.sign({ user: { id: user._id, role: user.role } }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(201).json({ message: 'User registered successfully', user: { fullName, email, role: user.role } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Mock Login for Testing
        if (email === 'test@example.com' && password === 'password123') {
            const token = jwt.sign({ user: { id: 'mock_user_123', role: 'user' } }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            return res.status(200).json({ message: 'Logged in successfully (MOCK)', user: { fullName: 'Mock Student', email, role: 'user' } });
        }

        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ user: { id: user._id, role: user.role } }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ message: 'Logged in successfully', user: { fullName: user.fullName, email, role: user.role } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProfile = async (req, res) => {
    try {
        if (req.user.id === 'mock_user_123') {
            return res.json({ id: 'mock_user_123', fullName: 'Mock Student', email: 'test@example.com', role: 'user' });
        }
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
};

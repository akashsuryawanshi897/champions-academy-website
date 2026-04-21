const Contact = require('../models/Contact');
const Callback = require('../models/Callback');

exports.submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = new Contact({ name, email, subject, message });
        await contact.save();
        res.status(201).json({ message: 'Contact message sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.requestCallback = async (req, res) => {
    try {
        const { name, phone, course } = req.body;
        const callback = new Callback({ name, phone, course });
        await callback.save();
        res.status(201).json({ message: 'Callback requested successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

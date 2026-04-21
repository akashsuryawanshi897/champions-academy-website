const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseName: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    education: { type: String },
    address: { type: String },
    status: { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);

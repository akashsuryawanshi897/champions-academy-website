const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    // Optional - set if user is logged in
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },

    // Personal Details
    fullName:   { type: String, required: true },
    fatherName: { type: String },
    dob:        { type: String },
    gender:     { type: String },

    // Contact & Course
    phone:      { type: String, required: true },
    email:      { type: String, required: true },
    education:  { type: String },
    course:     { type: String, required: true },
    courseName: { type: String }, // alias kept for backward compat

    // Address
    address:    { type: String },

    // Status tracking
    status:     { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);

const mongoose = require('mongoose');

const callbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String },
    dateIntersted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Callback', callbackSchema);

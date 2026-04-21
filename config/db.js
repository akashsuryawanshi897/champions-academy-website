const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/defense_db', {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        return true;
    } catch (err) {
        console.error(`❌ MongoDB Error: ${err.message}`);
        return false;
    }
};

module.exports = connectDB;


const axios = require('axios');

const API_BASE = 'http://localhost:5000/api';

async function runTests() {
    console.log('🧪 Starting Backend Mock Tests...\n');

    try {
        // 1. Health Check
        console.log('🔍 Testing Health Check...');
        const health = await axios.get(`${API_BASE}/health`);
        console.log('✅ Health status:', health.data.status, '(Database:', health.data.database, ')\n');

        // 2. Mock Login
        console.log('🔑 Testing Mock Login (test@example.com)...');
        const loginRes = await axios.post(`${API_BASE}/auth/login`, {
            email: 'test@example.com',
            password: 'password123'
        });
        const cookie = loginRes.headers['set-cookie'];
        console.log('✅ Login successful:', loginRes.data.message);
        console.log('👤 User:', loginRes.data.user.fullName, '\n');

        // 3. Get Profile
        console.log('👤 Testing Get Profile...');
        const profileRes = await axios.get(`${API_BASE}/auth/profile`, {
            headers: { Cookie: cookie[0] }
        });
        console.log('✅ Profile retrieved:', profileRes.data.fullName, `(${profileRes.data.email})\n`);

        // 4. Get Applications
        console.log('📋 Testing Get Applications...');
        const appsRes = await axios.get(`${API_BASE}/applications/my-applications`, {
            headers: { Cookie: cookie[0] }
        });
        console.log('✅ Applications found:', appsRes.data.length);
        appsRes.data.forEach(app => {
            console.log(`   - ${app.courseName}: ${app.status}`);
        });
        console.log('\n🎉 ALL MOCK TESTS PASSED!');

    } catch (err) {
        console.error('❌ Test failed:');
        if (err.response) {
            console.error('   Status:', err.response.status);
            console.error('   Data:', err.response.data);
        } else {
            console.error('   Message:', err.message);
        }
    }
}

runTests();

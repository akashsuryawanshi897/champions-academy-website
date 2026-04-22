/**
 * Mock Auth System for The Champions Academy
 * Uses localStorage to simulate a database.
 */

const MOCK_DB_KEY = 'champions_academy_db';
const SESSION_KEY = 'champions_academy_session';

// Initialize Mock Data
const initialUsers = [
    {
        id: 'mock_user_1',
        fullName: 'John Doe',
        email: 'test@example.com',
        password: 'password123',
        phone: '1234567890',
        role: 'user',
        createdAt: new Date().toISOString()
    },
    {
        id: 'mock_admin_1',
        fullName: 'Admin User',
        email: 'admin@example.com',
        password: 'adminpassword',
        phone: '0987654321',
        role: 'admin',
        createdAt: new Date().toISOString()
    }
];

const initialApplications = [
    {
        id: 'app_1',
        userId: 'mock_user_1',
        fullName: 'John Doe',
        email: 'test@example.com',
        courseName: 'Police Bharti Special Batch',
        createdAt: new Date().toISOString(),
        status: 'pending'
    },
    {
        id: 'app_2',
        userId: 'mock_user_1',
        fullName: 'John Doe',
        email: 'test@example.com',
        courseName: 'Army recruitment preparation',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        status: 'approved'
    }
];

function getDB() {
    let db = JSON.parse(localStorage.getItem(MOCK_DB_KEY));
    if (!db) {
        db = { users: initialUsers, applications: initialApplications };
        localStorage.setItem(MOCK_DB_KEY, JSON.stringify(db));
    }
    return db;
}

function saveDB(db) {
    localStorage.setItem(MOCK_DB_KEY, JSON.stringify(db));
}

const MockAuth = {
    register: (userData) => {
        const db = getDB();
        if (db.users.find(u => u.email === userData.email)) {
            return { success: false, message: 'Email already exists' };
        }
        const newUser = {
            id: 'user_' + Date.now(),
            ...userData,
            role: 'user',
            createdAt: new Date().toISOString()
        };
        db.users.push(newUser);
        saveDB(db);
        MockAuth.login(newUser.email, newUser.password);
        return { success: true, user: newUser };
    },

    login: (email, password) => {
        const db = getDB();
        const user = db.users.find(u => u.email === email && u.password === password);
        if (user) {
            const session = { ...user };
            delete session.password;
            localStorage.setItem(SESSION_KEY, JSON.stringify(session));
            return { success: true, user: session };
        }
        return { success: false, message: 'Invalid email or password' };
    },

    logout: () => {
        localStorage.removeItem(SESSION_KEY);
        return { success: true };
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem(SESSION_KEY));
    },

    getApplications: () => {
        const user = MockAuth.getCurrentUser();
        if (!user) return [];
        const db = getDB();
        if (user.role === 'admin') return db.applications;
        return db.applications.filter(app => app.userId === user.id);
    },

    createApplication: (appData) => {
        const user = MockAuth.getCurrentUser();
        if (!user) return { success: false, message: 'Not logged in' };
        const db = getDB();
        const newApp = {
            id: 'app_' + Date.now(),
            userId: user.id,
            fullName: user.fullName,
            email: user.email,
            ...appData,
            createdAt: new Date().toISOString(),
            status: 'pending'
        };
        db.applications.push(newApp);
        saveDB(db);
        return { success: true, application: newApp };
    },
    
    updateApplicationStatus: (appId, status) => {
        const user = MockAuth.getCurrentUser();
        if (!user || user.role !== 'admin') return { success: false, message: 'Unauthorized' };
        const db = getDB();
        const app = db.applications.find(a => a.id === appId);
        if (app) {
            app.status = status;
            saveDB(db);
            return { success: true };
        }
        return { success: false, message: 'Application not found' };
    },
    
    getAllUsers: () => {
        const user = MockAuth.getCurrentUser();
        if (!user || user.role !== 'admin') return [];
        return getDB().users;
    }
};

window.MockAuth = MockAuth;

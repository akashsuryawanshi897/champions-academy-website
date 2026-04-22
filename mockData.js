
const mockUsers = [
    {
        id: 'mock_user_1',
        fullName: 'John Doe',
        email: 'test@example.com',
        password: 'password123',
        phone: '1234567890',
        role: 'user'
    },
    {
        id: 'mock_admin_1',
        fullName: 'Admin User',
        email: 'admin@example.com',
        password: 'adminpassword',
        phone: '0987654321',
        role: 'admin'
    }
];

const mockApplications = [
    {
        id: 'app_1',
        userId: 'mock_user_1',
        courseName: 'Police Bharti Special Batch',
        createdAt: new Date().toISOString(),
        status: 'pending'
    },
    {
        id: 'app_2',
        userId: 'mock_user_1',
        courseName: 'Army recruitment preparation',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        status: 'approved'
    }
];

module.exports = { mockUsers, mockApplications };

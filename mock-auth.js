/**
 * THE CHAMPIONS ACADEMY - Mock Backend System
 * ==============================================
 * Complete client-side mock backend using localStorage.
 * Intercepts all fetch() calls to /api/* endpoints and responds
 * with mock data. No server or database required.
 * 
 * Pre-seeded accounts:
 *   Admin:   admin@champions.com / admin123
 *   Student: student@champions.com / student123
 */

(function() {
    'use strict';

    // ==================== DATABASE (localStorage) ====================
    const DB = {
        get(key) {
            try { return JSON.parse(localStorage.getItem('ca_' + key)) || []; }
            catch(e) { return []; }
        },
        set(key, data) {
            localStorage.setItem('ca_' + key, JSON.stringify(data));
        },
        getOne(key) {
            try { return JSON.parse(localStorage.getItem('ca_' + key)); }
            catch(e) { return null; }
        },
        setOne(key, data) {
            localStorage.setItem('ca_' + key, JSON.stringify(data));
        }
    };

    // ==================== SEED DATA ====================
    function seedDatabase() {
        if (DB.getOne('db_seeded')) return;

        // Seed Users
        const users = [
            {
                id: 'admin_001',
                fullName: 'Admin Officer',
                email: 'admin@champions.com',
                password: 'admin123',
                phone: '+91 84844 00114',
                role: 'admin',
                createdAt: '2026-01-15T10:00:00Z'
            },
            {
                id: 'user_001',
                fullName: 'Rahul Sharma',
                email: 'student@champions.com',
                password: 'student123',
                phone: '+91 98765 43210',
                role: 'user',
                createdAt: '2026-02-20T08:30:00Z'
            },
            {
                id: 'user_002',
                fullName: 'Priya Patil',
                email: 'priya@example.com',
                password: 'priya123',
                phone: '+91 91234 56789',
                role: 'user',
                createdAt: '2026-03-05T14:20:00Z'
            },
            {
                id: 'user_003',
                fullName: 'Amit Deshmukh',
                email: 'amit@example.com',
                password: 'amit123',
                phone: '+91 87654 32100',
                role: 'user',
                createdAt: '2026-03-12T09:15:00Z'
            },
            {
                id: 'user_004',
                fullName: 'Sneha Kulkarni',
                email: 'sneha@example.com',
                password: 'sneha123',
                phone: '+91 99887 76655',
                role: 'user',
                createdAt: '2026-03-18T11:45:00Z'
            },
            {
                id: 'user_005',
                fullName: 'Vikram Jadhav',
                email: 'vikram@example.com',
                password: 'vikram123',
                phone: '+91 77665 54433',
                role: 'user',
                createdAt: '2026-04-01T16:00:00Z'
            }
        ];
        DB.set('users', users);

        // Seed Applications
        const applications = [
            {
                id: 'app_001',
                userId: 'user_001',
                courseName: 'Police Bharti Training',
                fullName: 'Rahul Sharma',
                phone: '+91 98765 43210',
                email: 'student@champions.com',
                education: '12th Pass',
                address: 'Pune, Maharashtra',
                status: 'approved',
                createdAt: '2026-02-25T10:00:00Z'
            },
            {
                id: 'app_002',
                userId: 'user_001',
                courseName: 'Army Agniveer Preparation',
                fullName: 'Rahul Sharma',
                phone: '+91 98765 43210',
                email: 'student@champions.com',
                education: '12th Pass',
                address: 'Pune, Maharashtra',
                status: 'pending',
                createdAt: '2026-04-10T14:30:00Z'
            },
            {
                id: 'app_003',
                userId: 'user_002',
                courseName: 'PSI Recruitment Batch',
                fullName: 'Priya Patil',
                phone: '+91 91234 56789',
                email: 'priya@example.com',
                education: 'Graduate',
                address: 'Nashik, Maharashtra',
                status: 'approved',
                createdAt: '2026-03-08T09:00:00Z'
            },
            {
                id: 'app_004',
                userId: 'user_003',
                courseName: 'Talathi Training Program',
                fullName: 'Amit Deshmukh',
                phone: '+91 87654 32100',
                email: 'amit@example.com',
                education: 'Graduate',
                address: 'Kolhapur, Maharashtra',
                status: 'pending',
                createdAt: '2026-03-15T11:00:00Z'
            },
            {
                id: 'app_005',
                userId: 'user_004',
                courseName: 'STI Recruitment Batch',
                fullName: 'Sneha Kulkarni',
                phone: '+91 99887 76655',
                email: 'sneha@example.com',
                education: 'Post Graduate',
                address: 'Solapur, Maharashtra',
                status: 'rejected',
                createdAt: '2026-03-20T15:30:00Z'
            },
            {
                id: 'app_006',
                userId: 'user_005',
                courseName: 'Police Bharti Training',
                fullName: 'Vikram Jadhav',
                phone: '+91 77665 54433',
                email: 'vikram@example.com',
                education: '12th Pass',
                address: 'Sangli, Maharashtra',
                status: 'pending',
                createdAt: '2026-04-05T08:00:00Z'
            }
        ];
        DB.set('applications', applications);

        // Seed Contacts
        const contacts = [
            {
                id: 'contact_001',
                name: 'Rajesh More',
                email: 'rajesh@example.com',
                subject: 'Admission Enquiry',
                message: 'I want to know about the police bharti batch fees and schedule.',
                createdAt: '2026-04-01T10:00:00Z',
                read: true
            },
            {
                id: 'contact_002',
                name: 'Anita Shinde',
                email: 'anita@example.com',
                subject: 'Hostel Availability',
                message: 'Is hostel facility available for girl students?',
                createdAt: '2026-04-10T14:20:00Z',
                read: false
            },
            {
                id: 'contact_003',
                name: 'Suresh Gaikwad',
                email: 'suresh@example.com',
                subject: 'Physical Test Preparation',
                message: 'Do you provide separate physical training for army recruitment?',
                createdAt: '2026-04-15T09:30:00Z',
                read: false
            }
        ];
        DB.set('contacts', contacts);

        // Seed Callbacks
        const callbacks = [
            {
                id: 'cb_001',
                name: 'Manoj Pawar',
                phone: '+91 88997 76655',
                course: 'Police Bharti',
                createdAt: '2026-04-12T16:00:00Z',
                status: 'completed'
            },
            {
                id: 'cb_002',
                name: 'Kavita Deshpande',
                phone: '+91 77886 65544',
                course: 'Army Training',
                createdAt: '2026-04-14T11:30:00Z',
                status: 'pending'
            }
        ];
        DB.set('callbacks', callbacks);

        // Seed Announcements
        const announcements = [
            {
                id: 'ann_001',
                title: 'New Police Bharti Batch Starting May 2026',
                content: 'Registrations are open for the upcoming Police Bharti preparation batch. Limited seats available. Physical and written training included.',
                priority: 'high',
                active: true,
                createdAt: '2026-04-10T10:00:00Z'
            },
            {
                id: 'ann_002',
                title: 'Annual Sports Day - April 25, 2026',
                content: 'All students are invited to participate in the annual sports day. Events include running, long jump, shot put, and more.',
                priority: 'medium',
                active: true,
                createdAt: '2026-04-12T08:00:00Z'
            }
        ];
        DB.set('announcements', announcements);

        // Seed Materials
        const materials = [
            { id: 'mat_001', title: 'Police Bharti Physical Guide', size: '2.4 MB', type: 'PDF', cat: 'police', icon: '📋', color: '#eff6ff', createdAt: '2026-04-01T10:00:00Z' },
            { id: 'mat_002', title: 'Maharashtra Police Syllabus 2026', size: '1.1 MB', type: 'PDF', cat: 'police', icon: '📜', color: '#eff6ff', createdAt: '2026-04-02T10:00:00Z' },
            { id: 'mat_003', title: 'Police Bharti Running Tips', size: '0.8 MB', type: 'PDF', cat: 'police', icon: '🏃', color: '#eff6ff', createdAt: '2026-04-03T10:00:00Z' },
            { id: 'mat_004', title: 'Army Agniveer Full Syllabus', size: '3.2 MB', type: 'PDF', cat: 'army', icon: '⚔️', color: '#f0fdf4', createdAt: '2026-04-04T10:00:00Z' },
            { id: 'mat_005', title: 'Physical Standards - Army Recruitment', size: '1.5 MB', type: 'PDF', cat: 'army', icon: '💪', color: '#f0fdf4', createdAt: '2026-04-05T10:00:00Z' },
            { id: 'mat_006', title: 'PSI Prelim Question Bank', size: '5.3 MB', type: 'PDF', cat: 'psi', icon: '🏛️', color: '#faf5ff', createdAt: '2026-04-06T10:00:00Z' },
            { id: 'mat_007', title: 'General Knowledge 2026', size: '6.2 MB', type: 'PDF', cat: 'general', icon: '📖', color: '#fff7ed', createdAt: '2026-04-07T10:00:00Z' }
        ];
        DB.set('materials', materials);

        // Seed Exams
        const exams = [
            { id: 'ex_001', name: 'Maharashtra Police Bharti 2026', date: '2026-05-15', status: 'upcoming', dept: 'Maharashtra Police', seats: '8,000+', cat: 'police', createdAt: '2026-04-01T10:00:00Z' },
            { id: 'ex_002', name: 'Army Agniveer Rally - Pune', date: '2026-05-22', status: 'upcoming', dept: 'Indian Army', seats: '200+', cat: 'army', createdAt: '2026-04-02T10:00:00Z' },
            { id: 'ex_003', name: 'PSI Direct Recruitment 2026', date: '2026-06-10', status: 'upcoming', dept: 'MPSC', seats: '330', cat: 'psi', createdAt: '2026-04-03T10:00:00Z' },
            { id: 'ex_004', name: 'Talathi Bharti 2026', date: '2026-07-05', status: 'upcoming', dept: 'Revenue Dept.', seats: '4,000+', cat: 'talathi', createdAt: '2026-04-04T10:00:00Z' },
            { id: 'ex_005', name: 'SSC GD Constable 2026', date: '2026-08-12', status: 'upcoming', dept: 'SSC', seats: '26,146', cat: 'ssc', createdAt: '2026-04-05T10:00:00Z' }
        ];
        DB.set('exams', exams);

        DB.setOne('db_seeded', true);
        console.log('✅ Mock database seeded successfully');
    }

    seedDatabase();

    // ==================== SESSION MANAGEMENT ====================
    function getSession() {
        return DB.getOne('session');
    }

    function setSession(user) {
        DB.setOne('session', {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            role: user.role,
            createdAt: user.createdAt
        });
    }

    function clearSession() {
        localStorage.removeItem('ca_session');
    }

    // ==================== GENERATE ID ====================
    function genId(prefix) {
        return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
    }

    // ==================== API HANDLERS ====================
    const apiHandlers = {
        // Auth: Register
        'POST /api/auth/register': function(body) {
            const users = DB.get('users');
            if (users.find(u => u.email === body.email)) {
                return { status: 400, data: { message: 'User already exists with this email' } };
            }
            const newUser = {
                id: genId('user'),
                fullName: body.fullName,
                email: body.email,
                password: body.password,
                phone: body.phone || '',
                role: 'user',
                createdAt: new Date().toISOString()
            };
            users.push(newUser);
            DB.set('users', users);
            setSession(newUser);
            return {
                status: 201,
                data: {
                    message: 'Registration successful! Welcome to Champions Academy.',
                    user: { fullName: newUser.fullName, email: newUser.email, role: newUser.role }
                }
            };
        },

        // Auth: Login
        'POST /api/auth/login': function(body) {
            const users = DB.get('users');
            const user = users.find(u => u.email === body.email && u.password === body.password);
            if (!user) {
                return { status: 400, data: { message: 'Invalid email or password. Try admin@champions.com / admin123 or student@champions.com / student123' } };
            }
            setSession(user);
            return {
                status: 200,
                data: {
                    message: 'Login successful!',
                    user: { fullName: user.fullName, email: user.email, role: user.role }
                }
            };
        },

        // Auth: Profile
        'GET /api/auth/profile': function() {
            const session = getSession();
            if (!session) {
                return { status: 401, data: { message: 'Not authenticated' } };
            }
            return { status: 200, data: session };
        },

        // Auth: Logout
        'POST /api/auth/logout': function() {
            clearSession();
            return { status: 200, data: { message: 'Logged out successfully' } };
        },

        // Applications: Get my applications
        'GET /api/applications/my-applications': function() {
            const session = getSession();
            if (!session) return { status: 401, data: { message: 'Not authenticated' } };
            const apps = DB.get('applications').filter(a => a.userId === session.id);
            return { status: 200, data: apps };
        },

        // Applications: Submit
        'POST /api/applications/submit': function(body) {
            const session = getSession();
            if (!session) return { status: 401, data: { message: 'Not authenticated' } };
            const app = {
                id: genId('app'),
                userId: session.id,
                courseName: body.course || body.courseName,
                fullName: body.fullName || session.fullName,
                phone: body.mobile || body.phone || session.phone,
                email: body.email || session.email,
                education: body.education || '',
                address: body.address || '',
                status: 'pending',
                createdAt: new Date().toISOString()
            };
            const apps = DB.get('applications');
            apps.push(app);
            DB.set('applications', apps);
            return { status: 201, data: { message: 'Application submitted successfully!', application: app } };
        },

        // Contact: Submit message
        'POST /api/contact/message': function(body) {
            const contact = {
                id: genId('contact'),
                name: body.name,
                email: body.email,
                subject: body.subject || 'General Enquiry',
                message: body.message,
                createdAt: new Date().toISOString(),
                read: false
            };
            const contacts = DB.get('contacts');
            contacts.push(contact);
            DB.set('contacts', contacts);
            return { status: 201, data: { message: 'Message sent successfully!' } };
        },

        // Contact: Callback
        'POST /api/contact/callback': function(body) {
            const cb = {
                id: genId('cb'),
                name: body.name,
                phone: body.phone,
                course: body.course,
                createdAt: new Date().toISOString(),
                status: 'pending'
            };
            const callbacks = DB.get('callbacks');
            callbacks.push(cb);
            DB.set('callbacks', callbacks);
            return { status: 201, data: { message: 'Callback requested successfully!' } };
        },

        // Health check
        'GET /api/health': function() {
            return { status: 200, data: { status: 'online', database: 'mock-localStorage', mode: 'demo' } };
        },

        // ==================== ADMIN API ====================
        // Admin: Get all users
        'GET /api/admin/users': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const users = DB.get('users').map(u => ({ ...u, password: undefined }));
            return { status: 200, data: users };
        },

        // Admin: Delete user
        'DELETE /api/admin/users': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let users = DB.get('users');
            users = users.filter(u => u.id !== body.userId);
            DB.set('users', users);
            // Also remove their applications
            let apps = DB.get('applications');
            apps = apps.filter(a => a.userId !== body.userId);
            DB.set('applications', apps);
            return { status: 200, data: { message: 'User deleted successfully' } };
        },

        // Admin: Get all applications
        'GET /api/admin/applications': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            return { status: 200, data: DB.get('applications') };
        },

        // Admin: Update application status
        'PUT /api/admin/applications': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const apps = DB.get('applications');
            const app = apps.find(a => a.id === body.applicationId);
            if (!app) return { status: 404, data: { message: 'Application not found' } };
            app.status = body.status;
            DB.set('applications', apps);
            return { status: 200, data: { message: 'Application status updated to ' + body.status, application: app } };
        },

        // Admin: Delete application
        'DELETE /api/admin/applications': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let apps = DB.get('applications');
            apps = apps.filter(a => a.id !== body.applicationId);
            DB.set('applications', apps);
            return { status: 200, data: { message: 'Application deleted' } };
        },

        // Public: Submit contact message (no auth required)
        'POST /api/contact/message': function(body) {
            const contact = {
                id: genId('contact'),
                name: body.name,
                email: body.email,
                phone: body.phone || '',
                subject: body.subject || 'General Enquiry',
                message: body.message,
                read: false,
                createdAt: new Date().toISOString()
            };
            const contacts = DB.get('contacts');
            contacts.push(contact);
            DB.set('contacts', contacts);
            return { status: 201, data: { message: 'Message sent successfully' } };
        },

        // Public: Submit callback request (no auth required)
        'POST /api/callback': function(body) {
            const cb = {
                id: genId('cb'),
                name: body.name,
                phone: body.phone,
                course: body.course || '',
                status: 'pending',
                createdAt: new Date().toISOString()
            };
            const callbacks = DB.get('callbacks');
            callbacks.push(cb);
            DB.set('callbacks', callbacks);
            return { status: 201, data: { message: 'Callback request submitted' } };
        },

        // Admin: Get all contacts
        'GET /api/admin/contacts': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            return { status: 200, data: DB.get('contacts') };
        },

        // Admin: Mark contact as read
        'PUT /api/admin/contacts': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const contacts = DB.get('contacts');
            const c = contacts.find(c => c.id === body.contactId);
            if (c) { c.read = true; DB.set('contacts', contacts); }
            return { status: 200, data: { message: 'Marked as read' } };
        },

        // Admin: Delete contact
        'DELETE /api/admin/contacts': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let contacts = DB.get('contacts');
            contacts = contacts.filter(c => c.id !== body.contactId);
            DB.set('contacts', contacts);
            return { status: 200, data: { message: 'Contact deleted' } };
        },

        // Admin: Get all callbacks
        'GET /api/admin/callbacks': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            return { status: 200, data: DB.get('callbacks') };
        },

        // Admin: Get announcements
        'GET /api/admin/announcements': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            return { status: 200, data: DB.get('announcements') };
        },

        // Public: Get active announcements (accessible by any logged-in user)
        'GET /api/announcements': function() {
            const session = getSession();
            if (!session) return { status: 401, data: { message: 'Not authenticated' } };
            const anns = DB.get('announcements').filter(a => a.active !== false);
            return { status: 200, data: anns };
        },

        // Admin: Create announcement
        'POST /api/admin/announcements': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const ann = {
                id: genId('ann'),
                title: body.title,
                content: body.content,
                priority: body.priority || 'medium',
                active: true,
                createdAt: new Date().toISOString()
            };
            const anns = DB.get('announcements');
            anns.push(ann);
            DB.set('announcements', anns);
            return { status: 201, data: { message: 'Announcement created', announcement: ann } };
        },

        // Admin: Delete announcement
        'DELETE /api/admin/announcements': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let anns = DB.get('announcements');
            anns = anns.filter(a => a.id !== body.announcementId);
            DB.set('announcements', anns);
            return { status: 200, data: { message: 'Announcement deleted' } };
        },

        // Public: Get materials
        'GET /api/materials': function() {
            const session = getSession();
            if (!session) return { status: 401, data: { message: 'Not authenticated' } };
            return { status: 200, data: DB.get('materials') };
        },

        // Admin: Create material
        'POST /api/admin/materials': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const mat = {
                id: genId('mat'),
                title: body.title,
                size: body.size || '1.0 MB',
                type: body.type || 'PDF',
                cat: body.cat || 'general',
                icon: body.icon || '📄',
                color: body.color || '#eff6ff',
                createdAt: new Date().toISOString()
            };
            const mats = DB.get('materials');
            mats.push(mat);
            DB.set('materials', mats);
            return { status: 201, data: { message: 'Material added', material: mat } };
        },

        // Admin: Delete material
        'DELETE /api/admin/materials': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let mats = DB.get('materials');
            mats = mats.filter(m => m.id !== body.materialId);
            DB.set('materials', mats);
            return { status: 200, data: { message: 'Material deleted' } };
        },

        // Public: Get exams
        'GET /api/exams': function() {
            const session = getSession();
            if (!session) return { status: 401, data: { message: 'Not authenticated' } };
            return { status: 200, data: DB.get('exams') };
        },

        // Admin: Create exam
        'POST /api/admin/exams': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const ex = {
                id: genId('ex'),
                name: body.name,
                date: body.date,
                status: body.status || 'upcoming',
                dept: body.dept || 'General',
                seats: body.seats || 'TBD',
                cat: body.cat || 'general',
                createdAt: new Date().toISOString()
            };
            const exams = DB.get('exams');
            exams.push(ex);
            DB.set('exams', exams);
            return { status: 201, data: { message: 'Exam scheduled', exam: ex } };
        },

        // Admin: Delete exam
        'DELETE /api/admin/exams': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let exams = DB.get('exams');
            exams = exams.filter(e => e.id !== body.examId);
            DB.set('exams', exams);
            return { status: 200, data: { message: 'Exam deleted' } };
        },

        // Admin: Dashboard stats
        'GET /api/admin/stats': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            const users = DB.get('users');
            const apps = DB.get('applications');
            const contacts = DB.get('contacts');
            const callbacks = DB.get('callbacks');
            const announcements = DB.get('announcements');
            return {
                status: 200,
                data: {
                    totalStudents: users.filter(u => u.role === 'user').length,
                    totalApplications: apps.length,
                    pendingApplications: apps.filter(a => a.status === 'pending').length,
                    approvedApplications: apps.filter(a => a.status === 'approved').length,
                    rejectedApplications: apps.filter(a => a.status === 'rejected').length,
                    totalContacts: contacts.length,
                    unreadContacts: contacts.filter(c => !c.read).length,
                    totalCallbacks: callbacks.length,
                    pendingCallbacks: callbacks.filter(c => c.status === 'pending').length,
                    totalAnnouncements: announcements.filter(a => a.active !== false).length,
                    recentRegistrations: users.filter(u => u.role === 'user').slice(-5).reverse()
                }
            };
        },

        // Admin: Edit/Toggle announcement
        'PUT /api/admin/announcements': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let anns = DB.get('announcements');
            const idx = anns.findIndex(a => a.id === body.announcementId);
            if (idx === -1) return { status: 404, data: { message: 'Announcement not found' } };
            anns[idx] = { ...anns[idx], ...body, announcementId: undefined, id: anns[idx].id };
            DB.set('announcements', anns);
            return { status: 200, data: { message: 'Announcement updated', announcement: anns[idx] } };
        },

        // Admin: Delete a specific application
        'DELETE /api/admin/applications': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let apps = DB.get('applications');
            apps = apps.filter(a => a.id !== body.applicationId);
            DB.set('applications', apps);
            return { status: 200, data: { message: 'Application deleted' } };
        },

        // Admin: Delete a student user
        'DELETE /api/admin/users': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let users = DB.get('users');
            users = users.filter(u => u.id !== body.userId);
            DB.set('users', users);
            // Also remove their applications
            let apps = DB.get('applications');
            apps = apps.filter(a => a.userId !== body.userId);
            DB.set('applications', apps);
            return { status: 200, data: { message: 'User deleted' } };
        },

        // Admin: Mark contact as read
        'PUT /api/admin/contacts': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let contacts = DB.get('contacts');
            const idx = contacts.findIndex(c => c.id === body.contactId);
            if (idx === -1) return { status: 404, data: { message: 'Contact not found' } };
            contacts[idx].read = true;
            DB.set('contacts', contacts);
            return { status: 200, data: { message: 'Marked as read' } };
        },

        // Admin: Delete a contact message
        'DELETE /api/admin/contacts': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let contacts = DB.get('contacts');
            contacts = contacts.filter(c => c.id !== body.contactId);
            DB.set('contacts', contacts);
            return { status: 200, data: { message: 'Message deleted' } };
        },

        // Admin: Update callback status
        'PUT /api/admin/callbacks': function(body) {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            let cbs = DB.get('callbacks');
            const idx = cbs.findIndex(c => c.id === body.callbackId);
            if (idx === -1) return { status: 404, data: { message: 'Callback not found' } };
            cbs[idx].status = body.status || 'completed';
            DB.set('callbacks', cbs);
            return { status: 200, data: { message: 'Callback updated' } };
        },

        // Admin: Reset database
        'POST /api/admin/reset': function() {
            const session = getSession();
            if (!session || session.role !== 'admin') return { status: 403, data: { message: 'Admin access required' } };
            localStorage.removeItem('ca_db_seeded');
            localStorage.removeItem('ca_users');
            localStorage.removeItem('ca_applications');
            localStorage.removeItem('ca_contacts');
            localStorage.removeItem('ca_callbacks');
            localStorage.removeItem('ca_announcements');
            seedDatabase();
            return { status: 200, data: { message: 'Database reset to defaults' } };
        }
    };

    // ==================== FETCH INTERCEPTOR ====================
    const _originalFetch = window.fetch;

    window.fetch = function(url, options) {
        const urlStr = typeof url === 'string' ? url : url.toString();

        // Only intercept /api/* requests
        if (!urlStr.startsWith('/api/') && !urlStr.includes('/api/')) {
            return _originalFetch.apply(this, arguments);
        }

        const method = (options && options.method) ? options.method.toUpperCase() : 'GET';
        let body = {};
        if (options && options.body) {
            try { body = JSON.parse(options.body); } catch(e) { body = {}; }
        }

        // Clean path
        let path = urlStr;
        if (path.includes('://')) {
            path = new URL(path).pathname;
        }

        const handlerKey = method + ' ' + path;
        console.log(`🔷 Mock API: ${handlerKey}`, body);

        const handler = apiHandlers[handlerKey];
        if (handler) {
            const result = handler(body);
            console.log(`🔶 Mock Response [${result.status}]:`, result.data);
            return Promise.resolve(new Response(JSON.stringify(result.data), {
                status: result.status,
                headers: { 'Content-Type': 'application/json' }
            }));
        }

        // Fallback for unmatched API routes
        console.warn(`⚠️ Mock API: No handler for ${handlerKey}`);
        return Promise.resolve(new Response(JSON.stringify({ message: 'Mock endpoint not found: ' + handlerKey }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        }));
    };

    // ==================== GLOBAL AUTH HELPERS ====================
    window.MockAuth = {
        getSession: getSession,
        clearSession: clearSession,
        isLoggedIn: function() { return !!getSession(); },
        isAdmin: function() { const s = getSession(); return s && s.role === 'admin'; },
        getCurrentUser: getSession,
        resetDatabase: function() {
            localStorage.removeItem('ca_db_seeded');
            ['users','applications','contacts','callbacks','announcements','session'].forEach(k => {
                localStorage.removeItem('ca_' + k);
            });
            seedDatabase();
            console.log('✅ Database reset complete');
        }
    };

    console.log('✅ Mock Auth System loaded. Pre-seeded accounts:');
    console.log('   Admin:   admin@champions.com / admin123');
    console.log('   Student: student@champions.com / student123');
    // Expose Logout globally for all pages using components.js or direct onclick
    window.logout = async function() {
        console.log("Logging out...");
        const res = await fetch('/api/auth/logout', { method: 'POST' });
        if (res.ok) {
            window.location.href = 'index.html';
        }
    };
})();

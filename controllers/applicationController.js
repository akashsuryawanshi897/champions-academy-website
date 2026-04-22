const Application = require('../models/Application');

exports.submitApplication = async (req, res) => {
    try {
        const { course, fullName, mobile, email, education, address } = req.body;
        const application = new Application({
            userId: req.user.id,
            courseName: course,
            fullName,
            phone: mobile,
            email,
            education,
            address
        });
        await application.save();
        res.status(201).json({ message: 'Application submitted successfully', application });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getUserApplications = async (req, res) => {
    try {
        if (req.user.id === 'mock_user_123') {
            return res.json([
                {
                    _id: 'mock_app_1',
                    courseName: 'Police Bharti Special Batch',
                    createdAt: new Date().toISOString(),
                    status: 'pending'
                },
                {
                    _id: 'mock_app_2',
                    courseName: 'Army recruitment preparation',
                    createdAt: new Date(Date.now() - 86400000).toISOString(),
                    status: 'approved'
                }
            ]);
        }
        const applications = await Application.find({ userId: req.user.id });
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

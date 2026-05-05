const Application = require('../models/Application');

exports.submitApplication = async (req, res) => {
    try {
        const { 
            fullName, fatherName, dob, gender,
            mobile, email, education, course,
            address 
        } = req.body;

        if (!fullName || !mobile || !email || !course) {
            return res.status(400).json({ message: 'Please fill all required fields (name, mobile, email, course).' });
        }

        const application = new Application({
            userId:     req.user ? req.user.id : undefined, // optional - set if logged in
            fullName,
            fatherName,
            dob,
            gender,
            phone:      mobile,
            email,
            education,
            course,
            courseName: course, // keep alias
            address
        });

        await application.save();
        res.status(201).json({ message: 'Application submitted successfully! We will contact you soon.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
};

exports.getUserApplications = async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.user.id });
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

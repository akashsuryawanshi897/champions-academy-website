const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route - anyone can submit an application (no login needed)
router.post('/submit', applicationController.submitApplication);

// Protected routes - require login
router.get('/my-applications', authMiddleware, applicationController.getUserApplications);
router.get('/all', authMiddleware, applicationController.getAllApplications);

module.exports = router;

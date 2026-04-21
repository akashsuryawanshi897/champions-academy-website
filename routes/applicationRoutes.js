const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, applicationController.submitApplication);
router.get('/my-applications', authMiddleware, applicationController.getUserApplications);

module.exports = router;

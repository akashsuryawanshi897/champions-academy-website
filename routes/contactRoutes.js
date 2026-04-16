const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/message', contactController.submitContact);
router.post('/callback', contactController.requestCallback);

module.exports = router;

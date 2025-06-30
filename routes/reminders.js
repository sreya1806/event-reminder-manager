const express = require('express');
const router = express.Router();
const reminderController = require('../Controllers/reminderController');

router.post('/', reminderController.createReminder); // Create
router.get('/', reminderController.getAllReminders); // Read all
router.get('/:id', reminderController.getReminderById); // Read one
router.put('/:id', reminderController.updateReminder); // Update
router.delete('/:id', reminderController.deleteReminder); // Delete

module.exports = router;

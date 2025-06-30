const Reminder = require('../models/Reminder'); // Mongoose model

// 1. Create (Add) a new reminder
const createReminder = async (req, res) => {
  try {
    const { title, description, date, time } = req.body;

    // Create new reminder
    const newReminder = new Reminder({
      title,
      description,
      date,
      time
    });

    // Save to DB
    const savedReminder = await newReminder.save();

    // Respond with saved reminder
    res.status(201).json(savedReminder);
  } catch (error) {
    console.error('Create Error:', error.message);
    res.status(500).json({ message: 'Failed to create reminder' });
  }
};

// 2. Get all reminders
const getAllReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Get a reminder by ID
const getReminderById = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) return res.status(404).json({ message: 'Reminder not found' });
    res.json(reminder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. Update a reminder
const updateReminder = async (req, res) => {
  try {
    const updated = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Reminder not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// 5. Delete a reminder
const deleteReminder = async (req, res) => {
  try {
    const deleted = await Reminder.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Reminder not found' });
    res.json({ message: 'Reminder deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Export all functions
module.exports = {
  createReminder,
  getAllReminders,
  getReminderById,
  updateReminder,
  deleteReminder
};

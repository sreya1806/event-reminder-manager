const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reminderRoutes = require('./routes/reminders');

const app = express();

app.use(express.json());

// 👇 Add this to serve public folder
app.use(express.static('public'));

app.use('/api/reminders', reminderRoutes);

// Connect MongoDB and start server as usual

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ DB connection failed:', err));

app.use('/api/reminders', reminderRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the Event Reminder API!');
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB (make sure your MongoDB server is running)
mongoose.connect('mongodb://localhost:27017/email-subscription', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Email schema
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

const Email = mongoose.model('Email', emailSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (assuming your HTML, CSS, and JS are in a folder named 'public')
app.use(express.static('public'));

// Endpoint to handle email subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    // Save email to the database
    const newEmail = new Email({ email });
    await newEmail.save();

    return res.status(200).json({ message: 'Thank you for subscribing!' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

function isValidEmail(email) {
  // Basic email validation (you might want to use a more robust solution)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

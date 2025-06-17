import express from 'express';
import ContactMessage from '../models/contactMessage.js';

const contactRouter = express.Router();

contactRouter.post('/api/contact', async (req, res) => {
  console.log('Received contact form:', req.body); // Debug log
  try {
    const msg = new ContactMessage(req.body);
    await msg.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error); // Debug log
    res.status(500).json({ success: false, message: 'Failed to save message' });
  }
});

contactRouter.get('/api/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
});

// Delete a single contact message by ID
contactRouter.delete('/api/contact/:id', async (req, res) => {
  try {
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete message' });
  }
});

// Delete all contact messages
contactRouter.delete('/api/contact', async (req, res) => {
  try {
    await ContactMessage.deleteMany({});
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to clear messages' });
  }
});

export default contactRouter;
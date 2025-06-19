// filepath: /Users/adeniji/Desktop/dan-milano-elegance-main/Backend/routes/orderRoute.js
import express from 'express';
// You need to create the Order model (see below)
import Order from '../models/order.js';

const orderRouter = express.Router();

// Get all orders
orderRouter.get('/api/orders', async (req, res) => {
  try {
    // Explicitly include cartItems fields, including size
    const orders = await Order.find({}, {
      'cartItems.name': 1,
      'cartItems.price': 1,
      'cartItems.quantity': 1,
      'cartItems.size': 1, // <-- Explicitly include size
      'cartItems.image': 1,
      
      customer: 1,
      paymentReference: 1,
      createdAt: 1,
    }).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

// Add a new order (for frontend to POST orders)
orderRouter.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save order' });
  }
});

// Delete a single order by ID
orderRouter.delete('/api/orders/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete order' });
  }
});

// Delete all orders
orderRouter.delete('/api/orders', async (req, res) => {
  try {
    await Order.deleteMany({});
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to clear orders' });
  }
});

export default orderRouter;
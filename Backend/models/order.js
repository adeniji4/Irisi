// filepath: /Users/adeniji/Desktop/dan-milano-elegance-main/Backend/models/order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cartItems: { type: Array, required: true },
  customer: { type: Object, required: true },
  paymentReference: { type: String, required: true }
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
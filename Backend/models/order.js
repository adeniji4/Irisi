// filepath: /Users/adeniji/Desktop/dan-milano-elegance-main/Backend/models/order.js
import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  size: String, // <-- add this
  image: String, // <-- add this
});

const orderSchema = new mongoose.Schema(
  {
    cartItems: [cartItemSchema],
    customer: Object,
    paymentReference: String,
    // ...other fields as needed
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order
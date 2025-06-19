import React, { useEffect, useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders`)
      .then(res => res.json())
      .then(data => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this order?')) return;
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders/${id}`, { method: 'DELETE' });
    fetchOrders();
  };

  const handleClearAll = async () => {
    if (!window.confirm('Clear all orders?')) return;
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, { method: 'DELETE' });
    fetchOrders();
  };

  if (loading) return <div>Loading orders...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Orders</h2>
        <button
          onClick={handleClearAll}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, idx) => (
          <div key={order._id || idx} className="bg-white shadow rounded p-4 relative">
            {/* Delete X */}
            <button
              onClick={() => handleDelete(order._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
              title="Delete order"
            >
              ×
            </button>
            <div className="mb-2 text-xs text-gray-500">
              Order Ref: {order.paymentReference}
            </div>
            {/* Billing Address */}
            {order.customer && (
              <div className="mb-2 text-sm text-gray-700">
                <div><strong>Shipping Address:</strong></div>
                <div>{order.customer.firstName} {order.customer.lastName}</div>
                <div>{order.customer.address}</div>
                <div>{order.customer.city}, {order.customer.state}, {order.customer.country}</div>
                <div>{order.customer.email}</div>
                <div>{order.customer.phone}</div>
              </div>
            )}
            <div>
              {order.cartItems?.map((item, i) => (
                <div key={i} className="flex items-center mb-2">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-3" />
                  <div>
                    <div className="font-semibold">{item.name} {item.size && <span className="text-gray-500">({item.size})</span>}</div>
                    <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                    <div className="text-sm text-gray-800">₦{(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 font-bold">
              Total: ₦{order.cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
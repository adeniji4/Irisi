import React, { useEffect, useState } from 'react';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`)
      .then(res => res.json())
      .then(data => {
        setMessages(data.messages || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact/${id}`, { method: 'DELETE' });
    fetchMessages();
  };

  const handleClearAll = async () => {
    if (!window.confirm('Clear all messages?')) return;
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, { method: 'DELETE' });
    fetchMessages();
  };

  if (loading) return <div>Loading messages...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Contact Messages</h2>
        <button
          onClick={handleClearAll}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-4">
        {messages.map((msg, idx) => (
          <div key={msg._id || idx} className="bg-white shadow rounded p-4 relative">
            {/* Delete X */}
            <button
              onClick={() => handleDelete(msg._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
              title="Delete message"
            >
              ×
            </button>
            <div className="font-semibold">{msg.subject}</div>
            <div className="text-sm text-gray-700">{msg.message}</div>
            <div className="text-xs text-gray-500 mt-2">
              From: {msg.name} ({msg.email}) &middot; {new Date(msg.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMessages;
import React, { useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`.trim();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (data.success) {
        alert('Message sent!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message');
      }
    } catch (err) {
      alert('Network or server error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
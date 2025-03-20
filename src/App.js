import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!username) {
      alert("Username is required.");
      return;
    }
    if (!email) {
      alert("Email is required.");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!phone) {
      alert("Phone number is required.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!dob) {
      alert("Date of Birth is required.");
      return;
    }
    if (new Date(dob) > new Date()) {
      alert("Invalid Date of Birth. Please enter a past date.");
      return;
    }

    // Close modal and reset form
    setIsOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill the Form</h2>
            <form onSubmit={handleSubmit}>
              <label>Username:</label>
              <input id="username" type="text" value={formData.username} onChange={handleChange} />
              <br />

              <label>Email:</label>
              <input id="email" type="text" value={formData.email} onChange={handleChange} />
              <br />

              <label>Phone Number:</label>
              <input id="phone" type="text" value={formData.phone} onChange={handleChange} />
              <br />

              <label>Date of Birth:</label>
              <input id="dob" type="date" value={formData.dob} onChange={handleChange} />
              <br />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

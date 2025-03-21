import React, { useState } from "react";
import "./App.css";

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email. Please check your email address.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number. Please enter a 10-digit phone number.";
    if (new Date(formData.dob) > new Date())
      newErrors.dob = "Invalid date of birth. Please enter a valid past date.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      handleClose();
    }
  };

  return (
    <div className="app">
      <button onClick={handleOpen} className="open-form-btn">
        Open Form
      </button>

      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill the Form</h2>
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}

              <label>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label>Phone Number</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <label>Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && <span className="error">{errors.dob}</span>}

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;

// src/Reservations.js
import React, { useState } from 'react';
import './Reservations.css'; // Import a CSS file for Reservations page specific styles

function Reservations() {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({}); // New state for validation errors
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear error for the field being changed
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Date validation
    if (!formData.date) {
      newErrors.date = 'Date is required.';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize today to start of day
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past.';
        isValid = false;
      }
    }

    // Guests validation
    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10.';
      isValid = false;
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If validation passes, proceed with submission
      console.log('Reservation Form Data:', formData);
      // Simulate API call delay
      setTimeout(() => {
        setSubmitted(true); // Show success message
        // Optionally reset form after a short delay or user action
        setFormData({
          date: '',
          time: '17:00',
          guests: 1,
          occasion: 'Birthday',
          name: '',
          email: '',
          phone: ''
        });
        setErrors({}); // Clear any previous errors
        setTimeout(() => setSubmitted(false), 5000); // Message disappears after 5 seconds
      }, 500); // Simulate network delay
    } else {
      console.log('Form has validation errors.');
    }
  };

  return (
    <main className="reservations-page">
      <div className="reservations-container">
        <h1>Make a Reservation</h1>
        <p>Book your table at Little Lemon for an unforgettable dining experience!</p>

        {submitted && (
          <div className="reservation-success-message">
            <p><strong>🎉 Reservation submitted successfully!</strong> We will confirm your booking shortly via email.</p>
            <p>Thank you for choosing Little Lemon!</p>
          </div>
        )}

        {!submitted && (
          <form className="reservation-form" onSubmit={handleSubmit} noValidate> {/* Add noValidate to disable browser's default validation */}
            <div className="form-group">
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className={errors.date ? 'input-error' : ''} // Add error class
              />
              {errors.date && <p className="error-message">{errors.date}</p>} {/* Display error */}
            </div>

            <div className="form-group">
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={errors.time ? 'input-error' : ''} // Add error class
              >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
              {errors.time && <p className="error-message">{errors.time}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className={errors.guests ? 'input-error' : ''}
              />
              {errors.guests && <p className="error-message">{errors.guests}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
                className={errors.occasion ? 'input-error' : ''}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
              </select>
              {errors.occasion && <p className="error-message">{errors.occasion}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +15551234567"
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <button type="submit" className="submit-button">Make Your Reservation</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Reservations;
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
    phone: '',
    seating: '' // New state for seating preference
  });
  const [errors, setErrors] = useState({}); // State for validation errors
  const [submitted, setSubmitted] = useState(false); // State to show success message
  const [loading, setLoading] = useState(false); // State for loading indicator (for future API)
  const [apiError, setApiError] = useState(''); // State for API errors (for future API)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear error for the field being changed if it exists
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

    // Date validation - REQUIRED
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

    // Guests validation - REQUIRED
    const numGuests = parseInt(formData.guests);
    if (isNaN(numGuests) || numGuests < 1 || numGuests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10.';
      isValid = false;
    }

    // Name validation - REQUIRED
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
      isValid = false;
    }

    // Email validation - REQUIRED
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    // Seating preference validation - REQUIRED
    if (!formData.seating) {
      newErrors.seating = 'Seating preference is required.';
      isValid = false;
    }

    // Phone validation (Optional, but validated if entered)
    if (formData.phone && !/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid. Use digits only (e.g., +15551234567).';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(''); // Clear any previous API errors
    setSubmitted(false); // Hide success message if resubmitting

    if (validateForm()) {
      setLoading(true); // Indicate loading state
      console.log('Reservation Form Data (validated):', formData);

      // --- Simulation of API call (replace with actual fetch later) ---
      try {
        // Simulate a network request delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate a successful response
        const mockResponse = { message: 'Reservation successful!', reservation: formData };
        console.log('Mock API Response:', mockResponse);

        setSubmitted(true); // Show success message
        setFormData({ // Reset form after successful submission
          date: '',
          time: '17:00',
          guests: 1,
          occasion: 'Birthday',
          name: '',
          email: '',
          phone: '',
          seating: '' // Reset seating as well
        });
        setErrors({}); // Clear any previous errors
        setTimeout(() => setSubmitted(false), 5000); // Message disappears after 5 seconds

      } catch (error) {
        console.error('Simulated network error during reservation:', error);
        setApiError('A simulated error occurred. Please try again later.');
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    } else {
      console.log('Form has validation errors on the client side. Please correct them.');
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

        {apiError && (
          <div className="error-message">
            <p><strong>Error:</strong> {apiError}</p>
          </div>
        )}

        {!submitted && (
          <form className="reservation-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="res-date">Choose date <span className="required-star">*</span></label>
              <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required // HTML5 required attribute
                className={errors.date ? 'input-error' : ''}
              />
              {errors.date && <p className="error-message">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="res-time">Choose time <span className="required-star">*</span></label>
              <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required // HTML5 required attribute
                className={errors.time ? 'input-error' : ''}
              >
                <option value="">Select a time</option> {/* Added a default empty option for better UX */}
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
              <label htmlFor="guests">Number of guests <span className="required-star">*</span></label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required // HTML5 required attribute
                className={errors.guests ? 'input-error' : ''}
              />
              {errors.guests && <p className="error-message">{errors.guests}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion <span className="required-star">*</span></label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required // HTML5 required attribute
                className={errors.occasion ? 'input-error' : ''}
              >
                <option value="">Select an occasion</option> {/* Added a default empty option for better UX */}
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
              </select>
              {errors.occasion && <p className="error-message">{errors.occasion}</p>}
            </div>

            {/* NEW: Seating Preference Radio Buttons */}
            <div className="form-group radio-group"> {/* Added radio-group class for styling */}
                <label>Seating Preference <span className="required-star">*</span></label>
                <div className="radio-options">
                    <input
                        type="radio"
                        id="indoor-seating"
                        name="seating"
                        value="Indoor"
                        checked={formData.seating === 'Indoor'}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="indoor-seating">Indoor</label>

                    <input
                        type="radio"
                        id="outdoor-seating"
                        name="seating"
                        value="Outdoor"
                        checked={formData.seating === 'Outdoor'}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="outdoor-seating">Outdoor</label>
                </div>
                {errors.seating && <p className="error-message">{errors.seating}</p>}
            </div>


            <div className="form-group">
              <label htmlFor="name">Full Name <span className="required-star">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required // HTML5 required attribute
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required-star">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required // HTML5 required attribute
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

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Make Your Reservation'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Reservations;
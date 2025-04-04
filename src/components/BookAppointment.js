import React, { useState } from 'react';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        date: ''
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmationMessage(`Thank you ${formData.name}, your appointment with ${formData.doctor} on ${formData.date} has been successfully booked!`);
        setFormData({ name: '', email: '', phone: '', doctor: '', date: '' });
    };

    return (
        <div className="container">
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <label>Select Doctor</label>
                <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                    <option value="Dr. Puneesh">Dr. Puneesh (General Physician)</option>
                    <option value="Dr. Rishit">Dr. Rishit (Pediatrician)</option>
                    <option value="Dr. Shreya">Dr. Shreya (Dermatologist)</option>
                </select>
                <label>Preferred Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <button type="submit" className="btn">Book Appointment</button>
            </form>
            {confirmationMessage && <p style={{ color: 'green' }}>{confirmationMessage}</p>}
        </div>
    );
};

export default BookAppointment;
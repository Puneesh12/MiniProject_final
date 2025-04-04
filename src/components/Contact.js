import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Ensure you have emailjs installed
import './conta.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((result) => {
                setResponseMessage('Message sent successfully!');
                setIsSubmitting(false);
                setFormData({ name: '', email: '', message: '' }); // Reset form
            }, (error) => {
                setResponseMessage('Failed to send message, please try again.');
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit" disabled={isSubmitting}>Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;
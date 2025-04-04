import React, { useState } from 'react';
import { FaUser , FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
        console.log(formData);
    };

    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="input-group">
                    <FaUser  className="input-icon" />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                </div>
                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                </div>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <button type="submit" className="btn">Sign Up</button>
            </form>
            <div id="login">
                <p>Already have an account? <a href="/login" className="no-decoration">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;
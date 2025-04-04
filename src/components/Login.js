import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log(formData);
    };

    return (
        <div className="login-container">
            <h2>Login to Apointa</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                </div>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="social-login">
                    <p>Or login with:</p>
                    <button className="social-btn">Facebook</button>
                    <button className="social-btn">Google</button>
                </div>
            </form>
            <div className="forgot-password">
                <p><a href="#" className="no-decoration">Forgot Password?</a></p>
            </div>
            <div id="signup">
                <p>Don't have an account? <a href="/signup" className="no-decoration">Sign-Up</a></p>
            </div>
        </div>
    );
};

export default Login;
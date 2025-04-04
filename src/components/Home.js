import React from 'react';

const Home = () => {
    const fullText = "Book Your Healthcare Appointment Easily!"; // The full text to display

    return (
        <div>
            <header className="hero">
                <h1>{fullText}</h1> {/* Directly display the full text */}
                <p>Find the best doctors and schedule appointments with just a few clicks.</p>
                <a href="/login" className="button">Login</a>
                <a href="/book" className="button">Book your appointment</a>
            </header>

            <section className="about-us">
                <h2>About Us</h2>
                <p>
                    We are dedicated to providing the best healthcare services to our patients. Our team of experienced professionals is committed to ensuring your health and well-being. We believe in a patient-centered approach, where your needs and preferences are our top priority.
                </p>
            </section>

            <section className="services">
                <h2>Our Services</h2>
                <ul>
                    <li>General Health Checkups</li>
                    <li>Specialist Consultations</li>
                    <li>Diagnostic Services</li>
                    <li>Preventive Care</li>
                    <li>Telemedicine Services</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
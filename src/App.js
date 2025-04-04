import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import BookAppointment from './components/BookAppointment';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Services from './components/services'; // Correctly capitalized
import AboutUs from './components/aboutus'; // Correctly capitalized
import ContactForm from './components/ContactForm';
import PharmacyPage from './components/pharmacy'; // Ensure this path is correct

import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<BookAppointment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pharmacy" element={<PharmacyPage />} /> {/* Changed this line */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
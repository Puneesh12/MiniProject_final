import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-blue-900 p-4 text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">Healthcare App</h1>
          <div>
            <Link className="mx-2" to="/">Home</Link>
            <Link className="mx-2" to="/specialists">Specialists</Link>
            <Link className="mx-2" to="/contact">Contact</Link>
            <Link className="bg-yellow-400 text-black px-4 py-2 rounded mx-2" to="/login">Login</Link>
            <Link className="bg-white text-blue-900 px-4 py-2 rounded" to="/signup">Signup</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
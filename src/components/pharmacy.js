import React, { useState } from 'react';
 // Import your CSS file

const PharmacyPage = () => {
    // Sample data for medicines
    const [medicines] = useState([
        { id: 1, name: 'Paracetamol', description: 'Pain reliever and fever reducer', price: 5.00 },
        { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory pain reliever', price: 7.50 },
        { id: 3, name: 'Amoxicillin', description: 'Antibiotic for bacterial infections', price: 10.00 },
        { id: 4, name: 'Cough Syrup', description: 'Relieves cough and throat irritation', price: 8.00 },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (medicine) => {
        setCart([...cart, medicine]);
        alert(`${medicine.name} has been added to your cart!`);
    };

    return (
        <div className="pharmacy-page">
            <h1>Buy Medicines</h1>
            <div className="medicine-list">
                {medicines.map((medicine) => (
                    <div className="medicine-item" key={medicine.id}>
                        <h2>{medicine.name}</h2>
                        <p>{medicine.description}</p>
                        <p>Price: ₹{medicine.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(medicine)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PharmacyPage;
import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component
import './Services.css'; // Optional: Create a CSS file for styling

const Services = () => {
    const servicesData = [
        {
            title: 'General Health Checkups',
            description: 'Regular checkups to monitor your health and prevent diseases.',
        },
        {
            title: 'Specialist Consultations',
            description: 'Consult with specialists for specific health concerns.',
        },
        {
            title: 'Diagnostic Services',
            description: 'Comprehensive diagnostic tests to understand your health better.',
        },
        {
            title: 'Preventive Care',
            description: 'Preventive measures to maintain your health and well-being.',
        },
        {
            title: 'Telemedicine Services',
            description: 'Consult with healthcare professionals from the comfort of your home.',
        },
    ];

    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="service-cards-container">
                {servicesData.map((service, index) => (
                    <ServiceCard 
                        key={index} 
                        title={service.title} 
                        description={service.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Jewelry Design</h1>
            </header>
            <p>Welcome to the future of jewelry design. Discover patterns, create your own, and explore new trends.</p>
            <button onClick={() => window.location.href = '/login'}>Get Started</button>
        </div>
    );
};

export default HomePage;

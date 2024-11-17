// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Login successful!');
                    navigate('/index'); // Redirect to the Index route
                } else {
                    return response.json().then((data) => {
                        setError(data.message || 'Login failed. Please check your credentials.');
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('Server error. Please try again later.');
            });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                        <span className="toggle-password" onClick={togglePasswordVisibility}>
                            <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </span>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="input-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className="links">
                    <Link to="/create">Don't have an account? Create one</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

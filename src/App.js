// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Index from './components/Index';


import CreateAccount from './components/CreateAccount';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<CreateAccount />} />
                <Route path="/index" element={<Index />} />
            </Routes>
        </div>
    );
}

export default App;

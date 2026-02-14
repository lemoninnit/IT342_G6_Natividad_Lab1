import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import styles

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/auth/login', formData);
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed", error);
            alert("Backend not connected (Expected for Lab)");
        }
    };

    return (
        <div className="auth-container">
            <h2>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <a href="/register">Sign up</a></p>
        </div>
    );
};

export default Login;
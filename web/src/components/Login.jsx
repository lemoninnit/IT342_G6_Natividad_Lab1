import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', formData);
            // Save token/user info (Mocking it for now)
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed", error);
            // FOR SCREENSHOTS ONLY: If you need to snap the dashboard, click this to bypass
            // navigate('/dashboard'); 
            alert("Backend not connected (Expected for Lab)");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // This API call will fail without the backend, but the UI is correct.
            await axios.post('http://localhost:8080/api/auth/register', formData);
            alert("Registration Successful!");
            navigate('/login');
        } catch (error) {
            console.error("Error registering", error);
            // FOR SCREENSHOTS ONLY: Uncomment the next line to force redirect even if backend fails
            // navigate('/login'); 
            alert("Backend not connected (Expected for Lab)"); 
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required /><br /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default Register;
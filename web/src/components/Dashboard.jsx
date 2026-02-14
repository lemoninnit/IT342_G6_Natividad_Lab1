import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <p>Welcome! You have successfully logged into the secure area.</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
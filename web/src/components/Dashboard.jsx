import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    // In a real app, you would check localStorage here to see if user is logged in
    // const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to the Dashboard!</h1>
            <p>This is a protected area.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
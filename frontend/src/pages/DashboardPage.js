import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AdminDashboard from '../components/AdminDashboard';

const DashboardPage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            {user && user.isAdmin ? (
                <AdminDashboard />
            ) : (
                <p>You do not have access to this dashboard.</p>
            )}
        </div>
    );
};

export default DashboardPage;
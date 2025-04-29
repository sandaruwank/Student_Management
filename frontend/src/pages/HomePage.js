import React from 'react';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Student Management System</h1>
            <p>Your one-stop solution for managing student registrations, course enrollments, and more.</p>
            <div className="features">
                <h2>Features</h2>
                <ul>
                    <li>Student Registration</li>
                    <li>Login & Authentication</li>
                    <li>Course Enrollment</li>
                    <li>Admin Dashboard</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
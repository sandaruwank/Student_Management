import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    const [message, setMessage] = useState('');

    const handleRegistrationSuccess = (msg) => {
        setMessage(msg);
    };

    return (
        <div className="registration-page">
            <h1>Student Registration</h1>
            {message && <p className="success-message">{message}</p>}
            <RegistrationForm onSuccess={handleRegistrationSuccess} />
        </div>
    );
};

export default RegistrationPage;
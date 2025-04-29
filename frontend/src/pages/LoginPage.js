import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (credentials) => {
        try {
            await login(credentials);
            history.push('/dashboard');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
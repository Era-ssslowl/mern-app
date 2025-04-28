import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nes.css/css/nes.min.css';
import { loginUser } from '../api/auth';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await loginUser(login, password);
            console.log("Login Successful:", data);
            setLogin('');
            setPassword('');
        } catch (err) {
            console.log("testing commit")
            console.error("API Request Failed:", err);
            setError(err.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <form 
                className="nes-container with-title shadow p-4" 
                style={{ width: '400px' }} 
                onSubmit={handleSubmit}
            >
                <p className="title">Login</p>
                {error && <p className="text-danger">{error}</p>}

                <div className="mb-3">
                    <label htmlFor="login_field" className="form-label">Login</label>
                    <input 
                        type="text"
                        id="login_field"
                        name="login"
                        className="nes-input is-primary"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password_field" className="form-label">Password</label>
                    <input 
                        type="password"
                        id="password_field"
                        name="password"
                        className="nes-input is-primary"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="nes-btn is-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

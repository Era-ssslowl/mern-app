import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        height: '100vh',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid black',
        width: '450px',
        height: '400px',
    };

    const childStyle = {
        marginTop: '20px'
    };

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            console.log(login, password)

            const response = await axios.post("http://localhost:5000/login", {
                email: login,
                password
            });

            console.log("Login Successful:", response.data);

            // Clear input fields after successful login
            setLogin('');
            setPassword('');
        } catch (err) {
            console.error("API Request Failed:", err);
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className='login-form' style={pageStyle}>
            <form style={formStyle} className='shadow-lg' onSubmit={handleSubmit}>
                <h2>Welcome</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="nes-field" style={childStyle}>
                    <label htmlFor="login_field">Login</label>
                    <input 
                        type="text" 
                        id="login_field" 
                        name="login" 
                        className="nes-input" 
                        value={login} 
                        onChange={e => setLogin(e.target.value)}  
                    />
                </div>
                <div className="nes-field" style={childStyle}>
                    <label htmlFor="password_field">Password</label>
                    <input 
                        type="password" 
                        id="password_field" 
                        name="password" 
                        className="nes-input" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="nes-btn is-primary" style={childStyle}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

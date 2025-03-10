import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        height: '100vh',
       

    }

    const formStyle = { 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        border: '3px solid black',
        width: '450px',
        height: '400px',
        // boxShadow: '0 10px 20px rgba(0, 0, 0, 0.75)'
    }

    const childStyle = {
        marginTop: '20px'
    }






    return (
        <div className='login-form' style={pageStyle}>
           
            <form style={formStyle} className='shadow-lg'>
                <h2>Welcome</h2>
                <div className="nes-field" style={childStyle}>
                    <label htmlFor="login_field">Login</label>
                    <input type="text" id="login_field" name="login" className="nes-input" />
                </div>
                <div className="nes-field" style={childStyle}>
                    <label htmlFor="password_field">Password</label>
                    <input type="text" id="password_field" name="login" className="nes-input" />
                </div>
                <button type="submit" className="nes-btn is-primary" style={childStyle}>Login</button>
            </form>
        </div>
    );
};

export default Login;
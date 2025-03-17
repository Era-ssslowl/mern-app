import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
    const pageStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        height: "100vh",
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid black",
        width: "450px",
        height: "450px",
    };

    const childStyle = { marginTop: "20px" };

    // State variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!name || !email || !password) {
            setError("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/register", {
                name,
                email,
                password,
            });

            setMessage(response.data.message); // "User created"
            setName("");
            setEmail("");
            setPassword("");
        } catch (err) {
            setError(err.response?.data?.error || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-form" style={pageStyle}>
            <form style={formStyle} className="shadow-lg" onSubmit={handleSubmit}>
                <h2>Register</h2>
                {message && <p style={{ color: "green" }}>{message}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="nes-field" style={childStyle}>
                    <label htmlFor="name_field">Name</label>
                    <input
                        type="text"
                        id="name_field"
                        name="name"
                        className="nes-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="nes-field" style={childStyle}>
                    <label htmlFor="email_field">Email</label>
                    <input
                        type="email"
                        id="email_field"
                        name="email"
                        className="nes-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="nes-btn is-primary" style={childStyle}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

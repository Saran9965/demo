import React, { useState } from "react";
import "./login.css";
import { auth } from "./firebase"; 
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ user, setUser }) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, pwd);
            console.log(`Logged in: ${email}`);
            setUser(email);
            navigate("/home");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
            </div>
            <form onSubmit={handleLogin}>
                <div className="forms">
                    <label htmlFor="email" className="label">E-MAIL</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        id="email" placeholder="Enter your E-mail"required/>
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}
                        id="password" placeholder="Enter your password"required/>
                    <button type="submit" className="submit-btn">Submit</button>
                    <p>
                        Don't have an account? <a href="/">Sign up</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
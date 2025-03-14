import React from "react";
import "./login.css";
import { useState } from "react";

function Login() {
    const [name, setname] = useState("");
    const [pwd, setpwd] = useState("");

    function handle(event) {
        setname(event.target.value);
    }

    function handles(event) {
        setpwd(event.target.value);
        console.log(name, pwd)
    }
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
            </div>
            <form>
                <div className="forms">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" value={name} onChange={handle} id="name" placeholder="Enter your name" required />

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" value={pwd} onChange={handles} id="password" placeholder="Enter your password" required />

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

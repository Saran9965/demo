import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";  //Authentication
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database"; //Database
import app from "./firebase";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, pwd); //Authentication
            console.log(`User registered: ${email}`);

            //Firebase Realtime Database Registration
            const db = getDatabase(app);
            const newDoc = push(ref(db, "Signup"));
            await set(newDoc, {
                NAME: name,
                EMAIL: email,
                PASSWORD: pwd,
                AGE: age,
                CONTACT: contact
            });
            alert("Signup successful! You can now log in.");
            navigate("/login");
        } catch (error) {
            console.error("Signup Error:", error);
            alert(error.message);
        }
    };
    return (
        <div className="container">
            <div className="header">
                <div className="text">Signup</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="forms">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name" value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name" required />

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" value={pwd} 
                    onChange={(e) => setPwd(e.target.value)} 
                    placeholder="Enter your password" required />

                    <label htmlFor="email" className="label">E-mail</label>
                    <input type="email" id="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" required />

                    <label htmlFor="age" className="label">Age</label>
                    <input type="number" id="age" value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    placeholder="Enter your age" required />

                    <label htmlFor="contact" className="label">Contact</label>
                    <input type="tel" id="contact" value={contact} 
                    onChange={(e) => setContact(e.target.value)} 
                    placeholder="Enter your contact number" required />

                    <button type="submit" className="submit-btn">Submit</button>
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Signup;

import React from "react";
import "./login.css";
import { useState } from "react";
 
function Signup() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pwd, setpwd] = useState('');
    const [age, setage] = useState('');
    const [contact, setcontact] = useState('');
    
    function handleSubmit(e) {
      e.preventDefault();
      console.log({ name,email, pwd,age,contact});
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">Signup</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="forms">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name"  value={name} 
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Enter your name" required />

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" value={pwd} 
                    onChange={(e) => setpwd(e.target.value)} 
                    placeholder="Enter your password" required />

                    <label htmlFor="email" className="label">E-mail</label>
                    <input type="email" id="email"  value={email} 
                    onChange={(e) => setemail(e.target.value)} 
                    placeholder="Enter your email" required />

                    <label htmlFor="age" className="label">Age</label>
                    <input type="number" id="age" value={age} 
                    onChange={(e) => setage(e.target.value)} 
                    placeholder="Enter your age" required />

                    <label htmlFor="contact" className="label">Contact</label>
                    <input type="tel" id="contact" value={contact} 
                    onChange={(e) => setcontact(e.target.value)} 
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

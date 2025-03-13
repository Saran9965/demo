import React from "react";

import "./login.css"; 


const Login = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Signup</div>
            </div>
            <form>
            <div className="forms">
                <div className="label">NAME</div>
                <input type="text"placeholder="name" required/>
                <div className="label">PASSWORD</div>
                <input type="number"placeholder="password" required/>
                <div className="label">AGE</div>
                <input type="number"placeholder="age" required/>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    );
}

export default Login;

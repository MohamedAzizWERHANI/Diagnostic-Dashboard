import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import "./Form.css";
const Form_User=()=>{
    return (
        <>
        
        <div className="box"> 
    <div className="from">
        <h2>Sign in</h2>
        <div className="inputbox">
            <input type="text" required="required"/>
            <span>Email Adress</span>
           <i></i>
        </div>
        <div className="inputbox">
            <input type="password" required="required"/>
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
            <span>Forgot Password</span>
            <span>sign in</span>
        </div>
        <button><Link to={"/Dashboard"}>Login</Link></button>
    </div>
   </div>
        
        </>
    );
}
export default Form_User;
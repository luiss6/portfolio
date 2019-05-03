import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BackgroundPc from "./Images/Pic2.jpg";


function Test() {
    return (
        <div>            
            <ul className="list">
                <li ClassName="left">My Portfolio</li>
                {/* <Link to="/aboutme" className="cover"><li ClassName="right">About me</li></Link>
                <Link to="/contact" className="cover"><li ClassName="right">Contact</li></Link>
                <Link to="/projects" className="cover"><li ClassName="right">Projects</li></Link>    */}
            </ul>
            <div className="background-container">
                <h1 className="centered">Luigi Nurra</h1>
                <h2 className="centered-below">Web Developer</h2>
                <img src={ BackgroundPc }/>
           </div>
        </div>
        
    )
}




export default Test;
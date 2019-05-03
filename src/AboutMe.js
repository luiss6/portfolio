import React from "react";
import { Link } from "react-router-dom";
import "./App.css";



function AboutMe() {
    return (
        <div>            
                <ul className="list">
                    <Link to="/"  className="cover"><li>Homepage</li></Link>                
                    <Link to="/contact"  className="cover"><li>Contact</li></Link>
                    <Link to="/projects"  className="cover"><li>Projects</li></Link>
                </ul>
           
            <header>About me</header>
            <h3>Page currently under constructions. Content available soon... :)</h3>
        </div>
        
    )
}




export default AboutMe;
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";



function AboutMe() {
    return (
        <div>
             <ul className="list">
                <Link to="/" target='_blank' className="cover"><li>Homepage</li></Link>                
                <Link to="/contacts" target='_blank' className="cover"><li>Contacts</li></Link>
                <Link to="/projects" target='_blank' className="cover"><li>Projects</li></Link>
            </ul>
            <header>About me</header>
            <h3>Page currently under constructions. Content available soon... :)</h3>
        </div>
        
    )
}




export default AboutMe;
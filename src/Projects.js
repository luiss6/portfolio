import React from "react"
import { Link } from "react-router-dom";
import "./App.css";

function Projects() {
    return (
        <div>            
                <ul className="list">
                    <Link to="/"  className="cover"><li>Homepage</li></Link>
                    <Link to="/aboutme"  className="cover"><li>About me</li></Link>
                    <Link to="/contacts"  className="cover"><li>Contact</li></Link>
                </ul>       
            <header>Projects</header>
            <h1>Page currently under constructions. Content available soon... :)</h1>
        </div>
        
    )
}




export default Projects;
import React from "react"
import { Link } from "react-router-dom";
import "./index.css";

function Projects() {
    return (
        <div>
            <ul className="list">
                <Link to="/" target='_blank' className="cover"><li>Homepage</li></Link>
                <Link to="/aboutme" target='_blank' className="cover"><li>About me</li></Link>
                <Link to="/contacts" target='_blank' className="cover"><li>Contacts</li></Link>
            </ul>
            <header>Projects</header>
            <h1>Page currently under constructions. Content available soon... :)</h1>
        </div>
        
    )
}




export default Projects;
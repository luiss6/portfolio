import React from "react"
import { Link } from "react-router-dom";
import "./index.css";

function Contacts() {
    return (
        <div>
            <ul className="list">
                <Link to="/" target='_blank' className="cover"><li>Homepage</li></Link>
                <Link to="/aboutme" target='_blank' className="cover"><li>About me</li></Link>
                <Link to="/projects" target='_blank' className="cover"><li>Projects</li></Link>
            </ul>
            <header>Contacts</header>
            <h1>Page currently under constructions. Content available soon... :)</h1>
        </div>
        
    )
}




export default Contacts;
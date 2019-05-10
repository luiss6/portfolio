import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BackgroundPc from "./Images/Pic2.jpg";
import Kodflix from "./Images/Kodflix.png";


function Homepage() {
    return (
        <div>  
            <div className="homepage">
                <nav>        
                    <ul className="main-nav sticky">
                        <li className="push">My Portfolio</li>
                        <a href="#about" className="link"><li >About me</li></a>
                        <a href="#projects" className="link"><li >Projects</li></a>
                        <a href="#contact" className="link"><li >Contact</li></a>
                        {/* <Link to="/aboutme" className="link"><li >About me</li></Link> */}
                        {/* <Link to="/contact" className="link"><li >Contact</li></Link>
                        <Link to="/projects" className="link"><li >Projects</li></Link>    */}
                    </ul>
                </nav>
                <div className="background-container">
                    <div className="title-box">
                        <h1 className="centered title">Luigi Nurra</h1>
                        <h2 className="centered-below title">Web Developer</h2>
                    </div>
                    <img className="cover" src={ BackgroundPc }/>
                </div>
           </div>
           <div id="about">
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit. Curabitur imperdiet vehicula enim, sed 
                 venenatis tortor finibus eu. In sed nibh nisl. 
                 Praesent aliquam cursus diam, sed vestibulum sem 
                 facilisis ac. Vestibulum rutrum erat vitae tempus
                 maximus. Integer ligula enim, consectetur ut erat 
                 pharetra, dictum euismod ipsum. Morbi blandit, dolor
                 ultrices posuere cursus, ante nulla vulputate orci, a semper nisl dolor a sem. Quisque pellentesque a felis sit amet congue. </p>
           </div>
           <div id="projects">
                        <h2>Projects</h2>
                        <img className="projectImage" src={ Kodflix }/>
           </div>
           <div id="contact">
                <h2>Please contact me using the form below</h2>
                <form className="formContainer">
                        <input className="emailForm" type="email" placeholder="please enter your email address" required></input>
                        <textarea className="messageForm"placeholder="please type your message"></textarea>
                
                </form>
                <button type="submit" form="formContainer" value="Submit" strong>Send</button>
           </div> 
           <footer>
               website made by
           </footer>

        </div>
        
    )
}




export default Homepage;
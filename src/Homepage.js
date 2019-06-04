import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Kodflix from "./Images/kodflix.jpg";
import Carru from "./Images/carru.jpg";


function Homepage() {
    return (
        <div>
            <div className="homepage">
                <nav>
                    <ul className="main-nav sticky">
                        <li className="push">Luigi Nurra</li>
                        <a href="#about" className="link"><li >About me</li></a>
                        <a href="#projects" className="link"><li >Projects</li></a>
                        <a href="#contact" className="link"><li >Contact</li></a>
                    </ul>
                </nav>
                <div className="background-container">
                    <div className="title-box">
                        <h1 className="centered title">Luigi Nurra</h1>
                        <h2 className="centered-below title">Web Developer</h2>
                    </div>
                    <div className="cover"></div>
                    {/* <img className="cover" src={ BackgroundPc }/> */}
                </div>
            </div>
            <div id="about">
                <h2 className="about-header">About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Curabitur imperdiet vehicula enim, sed
                    venenatis tortor finibus eu. In sed nibh nisl.
                    Praesent aliquam cursus diam, sed vestibulum sem
                    facilisis ac. Vestibulum rutrum erat vitae tempus
                    maximus. Integer ligula enim, consectetur ut erat
                    pharetra, dictum euismod ipsum. Morbi blandit, dolor
                    ultrices posuere cursus, ante nulla vulputate orci,
                    a semper nisl dolor a sem. Quisque pellentesque a felis sit amet congue.
                </p>
                <div className="tech-stack">
                    <ul className="tech-stack-list">
                        <li><i class="fab fa-js-square js"></i></li>
                        <li><i class="fab fa-html5 html"></i></li>
                        <li><i class="fab fa-css3-alt css"></i></li>
                        <li><i class="fab fa-react react"></i></li>
                        <li><i class="fab fa-node node"></i></li>
                    </ul>
                </div>

            </div>

            <div id="projects">
                <h2 className="projectsHeader">Projects</h2>
                <hr></hr>
                <h3 className="project-title">Kodflix</h3>
                {/* <div className="projectsGrid"> */}
                <div className="projectsGridItem kodflix">

                    <img className="projectImage" src={Kodflix} />
                    <div className="project-description-wrap">
                        <p className="projects-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur imperdiet vehicula enim, sed
                            venenatis tortor finibus eu. In sed nibh nisl.
                            Praesent aliquam cursus diam, sed vestibulum sem
                            facilisis ac.
                                        </p>
                        <div><a href="#" ><i class="fab fa-github-square project-link link"></i></a></div>
                    </div>
                </div>

                <h3 className="project-title">Carru</h3>
                {/* <div className="projectsGrid"> */}
                <div className="projectsGridItem carru">

                    <img className="projectImage" src={Carru} />
                    <div className="project-description-wrap">
                        <p className="projects-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur imperdiet vehicula enim, sed
                            venenatis tortor finibus eu. In sed nibh nisl.
                            Praesent aliquam cursus diam, sed vestibulum sem
                            facilisis ac.
                                        </p>
                        <div><a href="#" ><i class="fab fa-github-square project-link link"></i></a></div>
                    </div>
                </div>
                {/* </div>         */}
            </div>
            <div id="contact">
                <h3>Get in touch</h3>
                <div className="social">
                    <ul className="social-media">
                        <li><a href="#" ><i class="fas fa-envelope link"></i></a></li>
                        <li><a href="#" ><i class="fab fa-github-square link"></i></a></li>
                        <li><a href="#" ><i class="fab fa-youtube link"></i></a></li>
                    </ul>
                </div>

            </div>
            <footer>
                <p className="footer-text">copyright @Luigi Nurra 2019</p>
            </footer>

        </div>

    )
}


export default Homepage;
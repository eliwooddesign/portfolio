import React from 'react';
import './style.css';

function About({ currentPage, setCurrentPage }) {

    return (

        <div className="page">

            <div className="about">

                <img src="/portfolio/assets/images/casual-headshot-portrait.jpg" alt="personal portrait" className="portrait"></img>

                <div className="about-bio">

                    <h2>Hi, my name is Eli and I'm a software developer.</h2>

                    <h3>I'm always open to new opportunities. Check out some of my work and let me know if you're interested in working together.</h3>

                    <div className="button-block">

                        <a href="#work" onClick={() => setCurrentPage('Work')} className="work-button">
                            <button>Work</button>
                        </a>

                        <a href="#contact" onClick={() => setCurrentPage('Contact')} className="contact-button">
                            <button>Contact</button>
                        </a>
                        
                    </div>

                </div>

            </div>

        </div>

    );

};

export default About;
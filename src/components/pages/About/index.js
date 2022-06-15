import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function About() {

    return (

        <div className="page">

            <div className="about">

                <img src="/portfolio/assets/images/casual-headshot-portrait.jpg" alt="personal portrait" className="portrait"></img>

                <div className="about-bio">

                    {window.innerWidth > 1500 ?
                        // desktop
                        <h2>Hi, my name is Eli and I'm a software developer.</h2>
                        :
                        // mobile
                        <>
                            <h2>Hi, my name is Eli and</h2>
                            <h2>I'm a software developer.</h2>
                        </>
                    }

                    <h3>I'm always open to new opportunities. Check out some of my work and let me know if you're interested in working together.</h3>

                    <div className="button-block">

                        <Link to="../work" className="work-button">
                            <button>Work</button>
                        </Link>

                        <Link to="../contact" className="contact-button">
                            <button>Contact</button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default About;
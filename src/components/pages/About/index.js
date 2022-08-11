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

                    <h3>I am a Front End Web Developer with a background in design and three years of professional web development experience. I recently earned a certificate in Full Stack Development from the University of Washington, where I developed skills in JavaScript, CSS, React.js, and responsive web design.</h3>
                    <h3>An innovative problem solver passionate about developing apps, with a focus on user-centered design and mobile-first and development. My previous career in sales management, and web design expereince has prepared me to approach problems with creativity and teamwork.</h3>
                    <h3>With each project, I strive to deliver the most impactful user experience and design with purpose. I applied aspects of UX and agile development in a recent project where I worked in a team of 3 to develop a full stack web application that helps Lost Ark players to find and create groups.</h3>
                    <h3>When I’m not designing or developing, I enjoy going to concerts, movies, trying out a new restaurant, or reading up on the latest trends in web and mobile design.</h3>
                    <h3>I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Check out some of my work and reach out when you're ready to chat about our next project.</h3>

                    <div className="button-block">

                        <Link to="../work" className="button">
                            <button>Work</button>
                        </Link>

                        <Link to="../contact" className="button">
                            <button>Contact</button>
                        </Link>

                        <a href="./assets/resume/eli-wood-resume.pdf" target="_blank" rel="noreferrer" className="button">
                            <button>Resume</button>
                        </a>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default About;
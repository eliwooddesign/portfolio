import React from 'react';
import './style.css';

function Work({ currentPage, setCurrentPage }) {

    return (

        <div className="page">

            <div className="intro">

                <h2>Hi, my name is Eli and I'm a software developer.</h2>

                <h3>I'm always open to new opportunities. Check out my portfolio</h3>
                <h3>and let me know if you're interested in working together.</h3>

                <a href="#contact" onClick={() => setCurrentPage('Contact')} className="contact-button">
                    <button>Contact</button>
                </a>

            </div>

            {/* recipe generator */}
            <div className="project-preview-left">

                <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-link">
                    <img src="/assets/work/recipe/desktop-mockup.png" alt="recipe generator preview" className="project-thumbnail"></img>
                </a>

                <div className="preview-details-left">
                
                    <h2 className="preview-title">Recipe Generator</h2>

                    <div className="preview-links">
                        <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/demo-recipe-generator" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* weather dashboard */}
            <div className="project-preview-right">

                <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-link">
                    <img src="/assets/work/weather/desktop-mockup.png" alt="weather dashboard preview" className="project-thumbnail"></img>
                </a>

                <div className="preview-details-right">
                
                    <h2 className="preview-title">Weather Dashboard</h2>

                    <div className="preview-links">
                        <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/demo-weather-dashboard" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* blog template */}
            <div className="project-preview-left">

                <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer" className="project-thumbnail-link">
                    <img src="/assets/work/blog/desktop-mockup.png" alt="blog template preview" className="project-thumbnail"></img>
                </a>

                <div className="preview-details-left">
                
                    <h2 className="preview-title">Blog Template</h2>

                    <div className="preview-links">
                        <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/blog-template" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* porefection */}
            <div className="project-preview-right">

                <a href="https://porefect.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-link">
                    <img src="/assets/work/porefection/desktop-mockup.png" alt="porefection preview" className="project-thumbnail"></img>
                </a>

                <div className="preview-details-right">
                
                    <h2 className="preview-title">Porefect Skincare</h2>

                    <div className="preview-links">
                        <a href="https://porefect.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/jittel/combo-skincare" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* social network api */}
            <div className="project-preview-left">

                <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer" className="project-thumbnail-link">
                    <img src="/assets/work/e-commerce/desktop-mockup.png" alt="social network api preview" className="project-thumbnail"></img>
                </a>

                <div className="preview-details-left">
                
                    <h2 className="preview-title">Social Network API</h2>

                    <div className="preview-links">
                        <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* e-commerce back end */}
            <div className="project-preview-right">

                <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer" className="project-thumbnail-link">
                    <img src="/assets/work/e-commerce/desktop-mockup.png" alt="e-commerce back end preview" className="project-thumbnail"></img>
                </a>

                <div className="preview-details-right">
                
                    <h2 className="preview-title">E-Commerce Back End</h2>

                    <div className="preview-links">
                        <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

        </div>

    );

};

export default Work;
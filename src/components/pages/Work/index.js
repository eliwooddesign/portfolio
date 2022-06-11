import React, { useState, useEffect } from 'react';
import './style.css';

function Work({ currentPage, setCurrentPage }) {

    // set state
    const [recipeModifier, setRecipeModifier] = useState(0);
    const [weatherModifier, setWeatherModifier] = useState(0);
    const [blogModifier, setBlogeModifier] = useState(0);
    const [porefectionModifier, setPorefectionModifier] = useState(0);
    const [socialModifier, setSocialModifier] = useState(0);
    const [commerceModifier, setCommerceModifier] = useState(0);

    // parallax scrolling
    const handleScroll = () => {

        // get window height
        const windowHeight = window.innerHeight;

        // get elements from the page
        const recipe = document.getElementById('recipe').getBoundingClientRect().top;
        const weather = document.getElementById('weather').getBoundingClientRect().top;
        const blog = document.getElementById('blog').getBoundingClientRect().top;
        const porefection = document.getElementById('porefection').getBoundingClientRect().top;
        const social = document.getElementById('social').getBoundingClientRect().top;
        const commerce = document.getElementById('commerce').getBoundingClientRect().top;

        // arrays of all elements and state setters
        const allElements = [recipe, weather, blog, porefection, social, commerce];
        const allStates = [setRecipeModifier, setWeatherModifier, setBlogeModifier, setPorefectionModifier, setSocialModifier, setCommerceModifier];

        // calculate modifier and set to state
        for (let i = 0; i < allElements.length; i++) {

            if (allElements[i] < 0) {
                allStates[i](Math.floor(Math.sqrt((windowHeight) * 40)));
            } else if (allElements[i] < windowHeight) {
                allStates[i](Math.floor(Math.sqrt((windowHeight - allElements[i]) * 40)));
            };

        };

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }, []);

    return (

        <div className="page">

            {/* banner */}
            <div className="intro">

                <h2>Hi, my name is Eli and I'm a software developer.</h2>

                <h3>I'm always open to new opportunities. Check out my portfolio</h3>
                <h3>and let me know if you're interested in working together.</h3>

                <a href="#contact" onClick={() => setCurrentPage('Contact')} className="contact-button">
                    <button>Contact</button>
                </a>

            </div>

            {/* recipe generator */}
            <div id="recipe" className="project-preview-left">

                <div className="preview-thumbnail">

                    <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${recipeModifier}px)` }}>
                        <img src="/assets/work/recipe/desktop-mockup.png" alt="recipe generator desktop preview" className="project-thumbnail-desktop"></img>
                    </a>

                    <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(-${recipeModifier * 0.4}px)` }}>
                        <img src="/assets/work/recipe/mobile-mockup.png" alt="recipe generator phone preview" className="project-thumbnail-phone"></img>
                    </a>

                </div>

                <div className="preview-details-right">

                    <h2 className="preview-title">Recipe Generator</h2>

                    <div className="preview-links">
                        <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/demo-recipe-generator" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* weather dashboard */}
            <div id="weather" className="project-preview-right">

                <div className="preview-thumbnail">

                    <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${weatherModifier}px)` }}>
                        <img src="/assets/work/weather/desktop-mockup.png" alt="weather dashboard preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-left">

                    <h2 className="preview-title">Weather Dashboard</h2>

                    <div className="preview-links">
                        <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/demo-weather-dashboard" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* blog template */}
            <div id="blog" className="project-preview-left">

                <div className="preview-thumbnail">

                    <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${blogModifier}px)` }}>
                        <img src="/assets/work/blog/desktop-mockup.png" alt="blog template preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-right">

                    <h2 className="preview-title">Blog Template</h2>

                    <div className="preview-links">
                        <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/blog-template" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* porefection */}
            <div id="porefection" className="project-preview-right">

                <div className="preview-thumbnail">

                    <a href="https://porefect.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${porefectionModifier}px)` }}>
                        <img src="/assets/work/porefection/desktop-mockup.png" alt="porefection preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-left">

                    <h2 className="preview-title">Porefect Skincare</h2>

                    <div className="preview-links">
                        <a href="https://porefect.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/jittel/combo-skincare" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* social network api */}
            <div id="social" className="project-preview-left">

                <div className="preview-thumbnail">

                    <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${socialModifier}px)` }}>
                        <img src="/assets/work/e-commerce/desktop-mockup.png" alt="social network api preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-right">

                    <h2 className="preview-title">Social Network API</h2>

                    <div className="preview-links">
                        <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* e-commerce back end */}
            <div id="commerce" className="project-preview-right">

                <div className="preview-thumbnail">

                    <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${commerceModifier}px)` }}>
                        <img src="/assets/work/e-commerce/desktop-mockup.png" alt="e-commerce back end preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-left">

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
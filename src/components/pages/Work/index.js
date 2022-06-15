import React, { useState, useEffect } from 'react';
import './style.css';

function Work({ currentPage, setCurrentPage }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // project positions
    const [foundArkPos, setFoundArkPos] = useState();
    // const [recipePos, setRecipePos] = useState();
    // const [weatherPos, setWeatherPos] = useState();
    // const [blogPos, setBlogePos] = useState();
    // const [socialPos, setSocialPos] = useState();
    // const [commercePos, setCommercePos] = useState();

    // project modifiers
    const [foundArkMod, setFoundArkMod] = useState(0);
    const [recipeMod, setRecipeMod] = useState(0);
    const [weatherMod, setWeatherMod] = useState(0);
    const [blogMod, setBlogeMod] = useState(0);
    const [socialMod, setSocialMod] = useState(0);
    const [commerceMod, setCommerceMod] = useState(0);

    // parallax effect
    const handleScroll = () => {

        // get window height
        const windowHeight = window.innerHeight;

        // get elements from the page
        const foundArk = document.getElementById('found-ark').getBoundingClientRect().top;
        const recipe = document.getElementById('recipe').getBoundingClientRect().top;
        const weather = document.getElementById('weather').getBoundingClientRect().top;
        const blog = document.getElementById('blog').getBoundingClientRect().top;
        const social = document.getElementById('social').getBoundingClientRect().top;
        const commerce = document.getElementById('commerce').getBoundingClientRect().top;

        setFoundArkPos(foundArk);
        // setRecipePos(recipe);
        // setWeatherPos(weather);
        // setBlogePos(blog);
        // setSocialPos(social);
        // setCommercePos(commerce);

        // arrays of all elements and state setters
        const allPositions = [foundArk, recipe, weather, blog, social, commerce];
        const setAllMods = [setFoundArkMod, setRecipeMod, setWeatherMod, setBlogeMod, setSocialMod, setCommerceMod];

        // set parallax end point
        let offset;

        if (windowWidth > 480) {
            offset = windowHeight / 4;
        } else {
            offset = windowHeight / 2;
        }

        for (let i = 0; i < allPositions.length; i++) {

            if (allPositions[i] < offset) {
                setAllMods[i](100 - ((offset / windowHeight) * 100));
            } else if (allPositions[i] < windowHeight) {
                setAllMods[i](100 - ((allPositions[i] / windowHeight) * 100));
            };

        };

    };

    useEffect(() => {
        window.addEventListener("resize", setWindowWidth(window.innerWidth));
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        // eslint-disable-next-line
    }, []);

    return (

        <div className="page">

            {/* banner */}
            <div className="intro">

                {windowWidth > 768 ?
                    // desktop
                    <>
                        <h2>Hi, my name is Eli and I'm a software developer.</h2>

                        <h3>I'm always open to new opportunities. Check out my portfolio</h3>
                        <h3>and let me know if you're interested in working together.</h3>
                    </>
                    :
                    // mobile
                    <>
                        <h2>Hi, my name is Eli and</h2>
                        <h2>I'm a software developer.</h2>

                        <h3>I'm always open to new opportunities. Check out my portfolio and let me know if you're interested in working together.</h3>
                    </>
                }

                <a href="#contact" onClick={() => setCurrentPage('Contact')} className="contact-button">
                    <button>Contact</button>
                </a>

            </div>

            {/* found ark */}
            <div id="found-ark" className="project-preview-left">

                <div className="preview-thumbnail-left">

                    <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${foundArkMod / 5}vh)` }}>
                        <img src="assets/work/found-ark/desktop-mockup.png" alt="found ark desktop preview" className="project-thumbnail-desktop"></img>
                        {foundArkPos < (window.innerHeight / 2) && <img src="assets/work/found-ark/desktop-animation.gif" alt="found ark desktop animation" className="thumbnail-animation-desktop"></img>}
                    </a>

                    <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${foundArkMod / 10}vh)` }}>
                        <img src="assets/work/found-ark/mobile-mockup.png" alt="found ark phone preview" className="project-thumbnail-phone"></img>
                    </a>

                </div>

                <div className="preview-details-right">

                    <h2 className="preview-title">Found Ark</h2>

                    <div className="preview-links">
                        <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/chuanw101/found-ark" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* recipe generator */}
            <div id="recipe" className="project-preview-right">

                <div className="preview-thumbnail-right">

                    <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${recipeMod / 5}vh)` }}>
                        <img src="assets/work/recipe/desktop-mockup.png" alt="recipe generator desktop preview" className="project-thumbnail-desktop"></img>
                    </a>

                    <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${recipeMod / 10}vh)` }}>
                        <img src="assets/work/recipe/mobile-mockup.png" alt="recipe generator phone preview" className="project-thumbnail-phone"></img>
                    </a>

                </div>

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
            <div id="weather" className="project-preview-left">

                <div className="preview-thumbnail-left">

                    <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${weatherMod / 5}vh)` }}>
                        <img src="assets/work/weather/desktop-mockup.png" alt="weather dashboard preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

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
            <div id="blog" className="project-preview-right">

                <div className="preview-thumbnail-right">

                    <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${blogMod / 5}vh)` }}>
                        <img src="assets/work/blog/desktop-mockup.png" alt="blog template preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-left">

                    <h2 className="preview-title">Blog Template</h2>

                    <div className="preview-links">
                        <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a>
                        <p className="preview-link-divider">|</p>
                        <a href="https://github.com/MrEliWood/blog-template" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* social network api */}
            <div id="social" className="project-preview-right">

                <div className="preview-thumbnail-left">

                    <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${socialMod / 5}vh)` }}>
                        <img src="assets/work/e-commerce/desktop-mockup.png" alt="social network api preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

                <div className="preview-details-left">

                    <h2 className="preview-title">Social Network API</h2>

                    <div className="preview-links">
                        <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>

                </div>

            </div>

            {/* e-commerce back end */}
            <div id="commerce" className="project-preview-left">

                <div className="preview-thumbnail-right">

                    <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${commerceMod / 5}vh)` }}>
                        <img src="assets/work/e-commerce/desktop-mockup.png" alt="e-commerce back end preview" className="project-thumbnail-desktop"></img>
                    </a>

                </div>

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
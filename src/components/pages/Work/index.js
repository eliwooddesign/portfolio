import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Work() {

    // project positions
    const [foundArkPos, setFoundArkPos] = useState();
    const [recipePos, setRecipePos] = useState();
    const [weatherPos, setWeatherPos] = useState();
    const [blogPos, setBlogePos] = useState();
    const [socialPos, setSocialPos] = useState();
    const [commercePos, setCommercePos] = useState();
    const [mavenPos, setMavenPos] = useState();
    const [propertyPos, setPropertyPos] = useState();

    // project modifiers
    const [foundArkMod, setFoundArkMod] = useState(0);
    const [recipeMod, setRecipeMod] = useState(0);
    const [weatherMod, setWeatherMod] = useState(0);
    const [blogMod, setBlogeMod] = useState(0);
    const [socialMod, setSocialMod] = useState(0);
    const [commerceMod, setCommerceMod] = useState(0);
    const [mavenMod, setMavenMod] = useState(0);
    const [propertyMod, setPropertyMod] = useState(0);

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
        const maven = document.getElementById('maven').getBoundingClientRect().top;
        const property = document.getElementById('property').getBoundingClientRect().top;

        setFoundArkPos(foundArk);
        setRecipePos(recipe);
        setWeatherPos(weather);
        setBlogePos(blog);
        setSocialPos(social);
        setCommercePos(commerce);
        setMavenPos(maven);
        setPropertyPos(property);

        // arrays of all elements and state setters
        const allPositions = [foundArk, recipe, weather, blog, social, commerce, maven, property];
        const setAllMods = [setFoundArkMod, setRecipeMod, setWeatherMod, setBlogeMod, setSocialMod, setCommerceMod, setMavenMod, setPropertyMod];

        // set parallax end point
        let offset;

        if (window.innerWidth > 768) {
            offset = windowHeight / 4;
        } else if (window.innerWidth > 480) {
            offset = windowHeight / 2.5;
        } else {
            offset = windowHeight / 1.75;
        }

        for (let i = 0; i < allPositions.length; i++) {

            if (allPositions[i] < offset) {
                setAllMods[i](windowHeight - offset);
            } else if (allPositions[i] < windowHeight) {
                setAllMods[i](windowHeight - allPositions[i]);
            };

        };

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        // eslint-disable-next-line
    }, []);

    console.log(foundArkMod)

    return (

        <div className="page">

            {/* banner */}
            <div className="intro">

                {window.innerWidth > 768 ?
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

                <Link to="../contact" className="contact-button">
                    <button>Contact</button>
                </Link>

            </div>

            {/* found ark */}
            <div className="sticky-container">

                <div id="found-ark" className="project-preview-left">


                    <div className="preview-thumbnail-left">

                        <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${Math.floor(foundArkMod / 5)}px)` }}>
                            <img src="./assets/work/found-ark/desktop-mockup.png" alt="found ark desktop preview" className="project-thumbnail-desktop"></img>
                            {(foundArkPos / window.innerHeight) < 0.21 && <img src="assets/work/found-ark/desktop-animation.gif" alt="found ark desktop animation" className="thumbnail-animation-desktop"></img>}
                        </a>

                        <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${Math.floor(foundArkMod / 10)}px)` }}>
                            <img src="./assets/work/found-ark/mobile-mockup.png" alt="found ark phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Found Ark</h2>

                        <div className="preview-links">
                            <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                            <p className="preview-link-divider">|</p>
                            <a href="https://github.com/chuanw101/found-ark" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>

                        <p className={(foundArkPos / window.innerHeight) < 0.21 ? "project-description-right show-description" : "project-description-right hide-description"}>
                            A web application that makes it easier for players to find and create groups for the game Lost Ark, without having to rely on giant anonymous servers where they may never get picked up.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            {/* recipe generator */}
            <div className="sticky-container">

                <div id="recipe" className="project-preview-right">

                    <div className="preview-thumbnail-right">

                        <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${recipeMod / 5}px)` }}>
                            <img src="./assets/work/recipe/desktop-mockup.png" alt="recipe generator desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${recipeMod / 10}px)` }}>
                            <img src="./assets/work/recipe/mobile-mockup.png" alt="recipe generator phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Recipe Generator</h2>

                        <div className="preview-links">
                            <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer">Deployed Application</a>
                            <p className="preview-link-divider">|</p>
                            <a href="https://github.com/MrEliWood/demo-recipe-generator" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>

                        <p className={(recipePos / window.innerHeight) < 0.21 ? "project-description-left show-description" : "project-description-left hide-description"}>
                            Users can find inspiration for their next meal by randomly generating recipes with sorting logic to filter their results by course and/or dietary restrictions and an engaging, intuitive user experience.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            {/* social network api */}
            <div className="sticky-container">

                <div id="social" className="project-preview-left">

                    <div className="preview-thumbnail-center">

                        <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${socialMod / 5}px)` }}>
                            <img src="./assets/work/e-commerce/desktop-mockup.png" alt="social network api preview" className="project-thumbnail-desktop"></img>
                        </a>

                    </div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Social Network API</h2>

                        <div className="preview-links">
                            <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>

                        <p className={(socialPos / window.innerHeight) < 0.21 ? "project-description-right show-description" : "project-description-right hide-description"}>
                            This Social Network API uses MongoDB to build the foundation for a NoSQL social network. Out of the box, users are able to share thoughts, react to thoughts, and connect with friends.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            {/* e-commerce back end */}
            <div className="sticky-container">

                <div id="commerce" className="project-preview-right">

                    <div className="preview-thumbnail-center">

                        <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${commerceMod / 5}px)` }}>
                            <img src="./assets/work/e-commerce/desktop-mockup.png" alt="e-commerce back end preview" className="project-thumbnail-desktop"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">E-Commerce Back End</h2>

                        <div className="preview-links">
                            <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>

                        <p className={(commercePos / window.innerHeight) < 0.21 ? "project-description-left show-description" : "project-description-left hide-description"}>
                            This strictly backend e-commerce application allows the user to easily manage their inventory with a MySQL database or lays a solid foundation for a developer planning to build a full stack e-commerce platform.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            {/* maven group */}
            <div className="sticky-container">

                <div id="maven" className="project-preview-left">


                    <div className="preview-thumbnail-left">

                        <a href="https://www.mavengroupnw.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${Math.floor(mavenMod / 5)}px)` }}>
                            <img src="./assets/work/maven/desktop-mockup.png" alt="maven group desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://www.mavengroupnw.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${Math.floor(mavenMod / 10)}px)` }}>
                            <img src="./assets/work/maven/mobile-mockup.png" alt="maven group phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Real Estate Team Websites</h2>

                        <div className="preview-links">
                            <a href="https://www.mavengroupnw.com" target="_blank" rel="noreferrer">Maven Group Live Website</a>
                        </div>

                        <p className={(mavenPos / window.innerHeight) < 0.21 ? "project-description-right show-description" : "project-description-right hide-description"}>
                            Promotional websites for real estate teams, serving as the first point of contact for potential clients and showcase for the services and success of the team.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            {/* property website */}
            <div className="sticky-container">

                <div id="property" className="project-preview-right">

                    <div className="preview-thumbnail-right">

                        <a href="https://shadowhawktownhome.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${propertyMod / 5}px)` }}>
                            <img src="./assets/work/property/desktop-mockup.png" alt="property desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://shadowhawktownhome.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${propertyMod / 10}px)` }}>
                            <img src="./assets/work/property/mobile-mockup.png" alt="property phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Property Websites</h2>

                        <div className="preview-links">
                            <a href="https://shadowhawktownhome.com" target="_blank" rel="noreferrer">Shadowhawk Townhome Live Website</a>
                        </div>

                        <p className={(propertyPos / window.innerHeight) < 0.21 ? "project-description-left show-description" : "project-description-left hide-description"}>
                            One of many websites shocasing a property for sale or for rent, featuring all important property details, engaging potential customers and funneling high value traffic.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>


            {/* weather dashboard */}
            <div className="sticky-container">

                <div id="weather" className="project-preview-left">

                    <div className="preview-thumbnail-center">

                        <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${weatherMod / 5}px)` }}>
                            <img src="./assets/work/weather/desktop-mockup.png" alt="weather dashboard preview" className="project-thumbnail-desktop"></img>
                        </a>

                    </div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Weather Dashboard</h2>

                        <div className="preview-links">
                            <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer">Deployed Application</a>
                            <p className="preview-link-divider">|</p>
                            <a href="https://github.com/MrEliWood/demo-weather-dashboard" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>

                        <p className={(weatherPos / window.innerHeight) < 0.21 ? "project-description-right show-description" : "project-description-right hide-description"}>
                            Full bleed background images and a clear, engaging user interface deliver a 5-day forecast utilizing powerful integrations from the Google Maps API and OpenWeather.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

            {/* blog template */}
            <div className="sticky-container">

                <div id="blog" className="project-preview-right">

                    <div className="preview-thumbnail-center">

                        <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${blogMod / 5}px)` }}>
                            <img src="./assets/work/blog/desktop-mockup.png" alt="blog template preview" className="project-thumbnail-desktop"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Blog Template</h2>

                        <div className="preview-links">
                            <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a>
                            <p className="preview-link-divider">|</p>
                            <a href="https://github.com/MrEliWood/blog-template" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>

                        <p className={(blogPos / window.innerHeight) < 0.21 ? "project-description-left show-description" : "project-description-left hide-description"}>
                            Free template for developers building a blog based on a MySQL database with complex relationships, including multiple users with hashed passwords powered by bcrypt.
                        </p>

                    </div>

                </div>

                <div className="sticky-spacer-medium"></div>

            </div>

        </div>

    );

};

export default Work;
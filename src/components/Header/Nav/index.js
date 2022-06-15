import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Nav({ currentPage, setCurrentPage }) {

    const [navStatus, setNavStatus] = useState('hidden');

    const location = useLocation();

    const navDetail = '/';

    const handleMobileNav = () => {

        if (window.innerWidth > 768) {
            setNavStatus('');
        } else {
            setNavStatus('hidden');
        };

    };

    const handleMobileNavClick = () => {

        if (window.innerWidth > 768) {
            return;
        } else if (navStatus === 'hidden' || navStatus === 'nav-closed') {
            setNavStatus('nav-open');
        } else if (navStatus === 'nav-open') {
            setNavStatus('nav-closed');
            setTimeout(() => setNavStatus('hidden'), 500);
        };

    };

    useEffect(() => {
        window.addEventListener("resize", handleMobileNav);
        handleMobileNav();
        // eslint-disable-next-line
    }, []);

    return (

        <>

            <div onClick={handleMobileNavClick} className="nav-item mobile-nav-button">
                <p>{navDetail}</p>
                <p>{navDetail}</p>
            </div>

            <ul onClick={handleMobileNavClick} className={"nav " + navStatus}>

                <li className="nav-item nav-detail">
                    <p>{navDetail}</p>
                    <p>{navDetail}</p>
                </li>

                <li className="nav-item">
                    <Link to="about" className={"nav-link " + (location.pathname === '/about' && 'active')}>About</Link>
                </li>

                <li className="nav-item">
                    <Link to="work" className={"nav-link " + (location.pathname === '/work' && 'active')}>Work</Link>
                </li>

                <li className="nav-item">
                    <Link to="contact" className={"nav-link " + (location.pathname === '/contact' && 'active')}>Contact</Link>
                </li>

                <li className="nav-item">
                    <a href="./assets/resume/eli-wood-resume.pdf" target="_blank" rel="noreferrer" className="nav-link">
                        Resume
                    </a>
                </li>

            </ul>

        </>

    );

};

export default Nav;
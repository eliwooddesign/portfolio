import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import './style.css';

function Header() {

    const [navStatus, setNavStatus] = useState('hidden');

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

    return (

        <header style={ window.innerWidth <= 768 && navStatus === 'hidden' ? { height: '132px' } : { height: '100%' }} >

            <div className="site-title">

                <Link to="work">
                    <h1>Eli Wood</h1>
                </Link>
                
                <p>Full Stack Software Developer</p>

            </div>

            <Nav handleMobileNavClick={handleMobileNavClick} navStatus={navStatus} setNavStatus={setNavStatus} />

        </header>

    );

}

export default Header;
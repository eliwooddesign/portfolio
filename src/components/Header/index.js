import React from 'react';
import Nav from './Nav'
import './style.css';

function Header({ currentPage, setCurrentPage }) {

    return (

        <header>

            <div className="site-title">

                <a href="#work" onClick={() => setCurrentPage('Work')}>
                    <h1>Eli Wood</h1>
                </a>
                
                <p>Full Stack Software Developer</p>

            </div>

            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </header>

    );

}

export default Header;
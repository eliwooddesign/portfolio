import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import './style.css';

function Header() {

    return (

        <header>

            <div className="site-title">

                <Link to="work">
                    <h1>Eli Wood</h1>
                </Link>
                
                <p>Full Stack Software Developer</p>

            </div>

            <Nav />

        </header>

    );

}

export default Header;
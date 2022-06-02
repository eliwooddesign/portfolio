import React from 'react';
import './style.css';

function Footer({ currentPage, setCurrentPage }) {

    let contactStatus;

    let footerDetailOpen = '/*';
    let footerDetailClose = '*/';

    if (currentPage === 'Contact') {
        contactStatus = 'focused';
        footerDetailOpen = '';
        footerDetailClose = '';
    }

    return (

        <footer>

            <ul className={"footer-contact " + contactStatus}>

                <li className="nav-item footer-detail">{footerDetailOpen}</li>

                <li className="nav-item">
                    <a href="sms:+14257365875" className="nav-link">
                        425.736.5875
                    </a>
                </li>

                <li className="nav-item">
                    <a href="mailto:contact.eliwood@gmail.com" className="nav-link">
                        contact.eliwood@gmail.com
                    </a>
                </li>

                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/eliwoodprofessional/" target="_blank" rel="noreferrer" className="nav-link">
                        LinkedIn
                    </a>
                </li>

                <li className="nav-item">
                    <a href="https://github.com/MrEliWood" target="_blank" rel="noreferrer" className="nav-link">
                        GitHub
                    </a>
                </li>

                <li className="nav-item footer-detail">{footerDetailClose}</li>

            </ul>

        </footer>

    );

}

export default Footer;

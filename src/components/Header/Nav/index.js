import React from 'react';
import './style.css';

function Nav({ currentPage, setCurrentPage }) {

   const navDetail = '//';

   return (

      <ul className="nav">

         <li className="nav-item nav-detail">{navDetail}</li>

         <li className="nav-item">
            <a href="#about" onClick={() => setCurrentPage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
               About
            </a>
         </li>

         <li className="nav-item">
            <a href="#work" onClick={() => setCurrentPage('Work')} className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>
               Work
            </a>
         </li>

         <li className="nav-item">
            <a href="#contact" onClick={() => setCurrentPage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
               Contact
            </a>
         </li>

         <li className="nav-item">
            <a href="/assets/resume/eli-wood-resume.pdf" target="_blank" rel="noreferrer" className="nav-link">
               Resume
            </a>
         </li>

      </ul>

   );

};

export default Nav;
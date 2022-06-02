// import components
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

// import styles
import './styles/reset.css';
import './styles/fonts.css';
import './styles/animations.css';
import './styles/variables.css';
import './styles/style.css';

function App() {

   const [currentPage, setCurrentPage] = useState('Work');

   const renderPage = () => {
      if (currentPage === 'About') {
         return <About currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      }
      if (currentPage === 'Work') {
         return <Work currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      }
      return <Contact currentPage={currentPage} setCurrentPage={setCurrentPage} />;
   };

   return (
      <div className="body">
         <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
         {renderPage()}
         <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
   );

}

export default App;

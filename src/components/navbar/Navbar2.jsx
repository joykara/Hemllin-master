/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';
import { IndustriesMenu, ServicesMenu, InsightsMenu, AboutMenu } from '../../container';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    handleIndustriesContent();
  };

  const handleIndustriesContent = () => {
    setActiveDropdown('industries');
  };

  const handleServicesContent = () => {
    setActiveDropdown('services');
  };

  const handleInsightsContent = () => {
    setActiveDropdown('insights');
  };

  const handleAboutContent = () => {
    setActiveDropdown('about');
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="navbar">
      {/* ... Rest of the code ... */}
      <div className="navbar__menu">
        <div className="navbar__menu-content">
          <div>
            <p onMouseEnter={handleIndustriesContent}>Industries</p>
            <div className={`drop-down-menu ${activeDropdown === 'industries' ? 'active' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <IndustriesMenu />
              </div>
            </div>
          </div>
          <div>
            <p onMouseEnter={handleServicesContent}><a href="/services">Services</a></p>
            <div className={`drop-down-menu2 ${activeDropdown === 'services' ? 'active2' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <ServicesMenu />
              </div>
            </div>
          </div>
          <div>
            <p onMouseEnter={handleInsightsContent}>Featured Insights</p>
            <div className={`drop-down-menu3 ${activeDropdown === 'insights' ? 'active3' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <InsightsMenu />
              </div>
            </div>
          </div>
          <p>Careers</p>
          <p><a href="/about-us/blog">Blog</a></p>
          <div>
            <p onMouseEnter={handleAboutContent}>About Us</p>
            <div className={`drop-down-menu4 ${activeDropdown === 'about' ? 'active4' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <AboutMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... Rest of the code ... */}
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiSearchLine, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import {SlArrowRight} from 'react-icons/sl'
import './navbar.css';
import { Link } from 'react-router-dom';
import { IndustriesMenu, ServicesMenu, InsightsMenu, AboutMenu } from '../../container';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);


  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    handleContent('industries', true);
  };

  const [industriesContent, setIndustriesContent] = useState(false);
  const [servicesContent, setServicesContent] = useState(false);
  const [insightsContent, setInsightsContent] = useState(false);
  const [aboutContent, setAboutContent] = useState(false);

  const handleContent = (section, flag) => {
    const contentStates = {
      industries: [setIndustriesContent],
      services: [setServicesContent],
      insights: [setInsightsContent],
      about: [setAboutContent]
    };

    for (const [setter] of Object.values(contentStates)) {
      if (setter === contentStates[section][0]) {
        setter(flag);
        setActiveMenu(section); // Set the active menu item
      } else {
        setter(false);
      }
    }
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
      <div className="navbar__logo">
        <button onClick={handleToggle}>
          {toggleMenu ? <RiCloseLine size={50} /> : <RiMenuLine size={40} />}
        </button>
        <p><Link to="/">Logo</Link></p>
      </div>
      {toggleMenu && (
        <div className={`navbar__menu-links ${toggleMenu ? 'show' : ''}`}>
          <div className="navbar__menu-links__container">
            <div className="navbar__menu-links-top">
              <button onClick={handleToggle}>
                {toggleMenu ? <RiCloseLine color="#fff" size={45} /> : <RiMenuLine color="#fff" size={30} />}
              </button>
              <p><Link to="/">Logo</Link></p>
            </div>
            <div className="menu">
              <div className="show-menu">
              <p onClick={() => handleContent('industries', true)} className={activeMenu === 'industries' ? 'active-link' : ''}>
                <span>Industries</span><span><SlArrowRight size={10} /></span>
              </p>
                <p onClick={() => handleContent('services', true)} className={activeMenu === 'services' ? 'active-link' : ''}>
                <span>Services</span><span><SlArrowRight size={10} /></span>
                </p>
                <p onClick={() => handleContent('insights', true)} className={activeMenu === 'insights' ? 'active-link' : ''}>
                <span>Featured Insights</span><span><SlArrowRight size={10} /></span>
                </p>
                <p onClick={() => handleContent('about', true)} className={activeMenu === 'about' ? 'active-link' : ''}>
                <span>About Us</span><span><SlArrowRight size={10} /></span>
                </p>
              </div>
              <p><a href="/careers">Careers</a></p>
              <p><a href="/about-us/blog">Blog</a></p>
              <p><a href="#subscribe">Email Subscriptions</a></p>
              <p><a href="#sign-in">Sign In</a></p>
            </div>
          </div>
          <div className="navbar__menu-links__details">
            <div className="navbar__menu-links__search">
              <input type="text" placeholder="Type to search..." />
              <button><RiSearchLine size={40} /></button>
            </div>
            <div className="navbar__menu-link__content">
              {industriesContent && <IndustriesMenu />}
              {servicesContent && <ServicesMenu />}
              {insightsContent && <InsightsMenu />}
              {aboutContent && <AboutMenu />}
            </div>
          </div>
        </div>
      )}
      <div className="navbar__menu">
        <div className="navbar__menu-content">
          <div>
            <p onMouseEnter={handleIndustriesContent} className={activeDropdown === 'industries' ? 'active-dropdown' : ''}>
              Industries
              {activeDropdown === 'industries' ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </p>
            <div className={`drop-down-menu ${activeDropdown === 'industries' ? 'active' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <IndustriesMenu />
              </div>
            </div>
          </div>
          <div>
            <p onMouseEnter={handleServicesContent} className={activeDropdown === 'services' ? 'active-dropdown' : ''}>
              <a href="/services">Services</a>
              {activeDropdown === 'services' ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </p>
            <div className={`drop-down-menu2 ${activeDropdown === 'services' ? 'active2' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <ServicesMenu />
              </div>
            </div>
          </div>
          <div>
            <p onMouseEnter={handleInsightsContent} className={activeDropdown === 'insights' ? 'active-dropdown' : ''}>
              Featured Insights
              {activeDropdown === 'insights' ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </p>
            <div className={`drop-down-menu3 ${activeDropdown === 'insights' ? 'active3' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <InsightsMenu />
              </div>
            </div>
          </div>
          <p>Careers</p>
          <p><a href="/about-us/blog">Blog</a></p>
          <div>
            <p onMouseEnter={handleAboutContent} className={activeDropdown === 'about' ? 'active-dropdown' : ''}>
              About Us
              {activeDropdown === 'about' ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </p>
            <div className={`drop-down-menu4 ${activeDropdown === 'about' ? 'active4' : ''}`} onMouseLeave={handleDropdownLeave}>
              <div className="drop-down-menu-container">
                <AboutMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar__search">
        <p><a href="">Sign In</a> | <a href="">Subscribe</a></p>
        <p><a href=""><RiSearchLine size={20} /></a></p>
      </div>
    </div>
  );
};

export default Navbar;

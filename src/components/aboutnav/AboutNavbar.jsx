import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { SlArrowRight } from 'react-icons/sl';
import './aboutnavbar.css';
import { Link } from 'react-router-dom';
import AboutUs from '../../container/dropdowns/AboutUs';
import { IndustriesMenu, ServicesMenu, InsightsMenu, AboutMenu } from '../../container';

const AboutNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [industriesContent, setIndustriesContent] = useState(false);
  const [servicesContent, setServicesContent] = useState(false);
  const [insightsContent, setInsightsContent] = useState(false);
  const [aboutContent, setAboutContent] = useState(false);

    //navbar menu content for devices <768px
  const [industriesContentVisible, setIndustriesContentVisible] = useState(false);
  const [servicesContentVisible, setServicesContentVisible] = useState(false);
  const [insightsContentVisible, setInsightsContentVisible] = useState(false);
  const [aboutContentVisible, setAboutContentVisible] = useState(false);

  const handleContentVisible = (section, flag) => {
    const contentStates = {
      industries: setIndustriesContentVisible,
      services: setServicesContentVisible,
      insights: setInsightsContentVisible,
      about: setAboutContentVisible
    };

    for (const [key, setter] of Object.entries(contentStates)) {
      if (key === section) {
        setter(flag);
        setActiveMenu(section); // Set the active menu item
      } else {
        setter(false);
      }
    }
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    handleContent('industries', true);
  };

  const handleContent = (section, flag) => {
    const contentStates = {
      industries: setIndustriesContent,
      services: setServicesContent,
      insights: setInsightsContent,
      about: setAboutContent
    };

    for (const [key, setter] of Object.entries(contentStates)) {
      if (key === section) {
        setter(flag);
        setActiveMenu(section); // Set the active menu item
      } else {
        setter(false);
      }
    }
  };

  const [aboutDropdown, setAboutDropdown] = useState(false);
  const handleAboutDropdownLeave = () => {
    setAboutDropdown(false);
  };

  return (
    <div className="aboutnavbar">
      <div className="aboutnavbar__logo">
        <button onClick={handleToggle}>
          {toggleMenu ? <RiCloseLine size={50} /> : <RiMenuLine size={40} />}
        </button>
        <p>
          <Link to="/">Logo</Link>
        </p>
      </div>
      {toggleMenu && (
        <div className={`navbar__menu-links ${toggleMenu ? 'show' : ''}`}>
          <div className="navbar__menu-links__container">
            <div className="navbar__menu-links-top">
              <button onClick={handleToggle}>
                {toggleMenu ? (
                  <RiCloseLine color="#fff" size={45} />
                ) : (
                  <RiMenuLine color="#fff" size={30} />
                )}
              </button>
              <p>
                <Link to="/">Logo</Link>
              </p>
            </div>
            <div className="menu">
              <div className="show-menu">
                    <p
                    onClick={() => handleContent('industries', true) || handleContentVisible('industries', !industriesContentVisible)}
                    className={activeMenu === 'industries' ? 'active-link' : ''}
                    >
                    <span>Industries</span>
                    <span>
                        <SlArrowRight size={10} />
                    </span>
                    </p>
                    {/* display menu for devices <768px */}
                    <div className="navbar__mini-menu-content">
                    {industriesContentVisible && <IndustriesMenu />}
                    </div>
                    <p
                    onClick={() => handleContent('services', true) || handleContentVisible('services', !servicesContentVisible)}
                    className={activeMenu === 'services' ? 'active-link' : ''}
                    >
                    <span>Services</span>
                    <span>
                        <SlArrowRight size={10} />
                    </span>
                    </p>
                    <div className="navbar__mini-menu-content">
                    {servicesContentVisible && <ServicesMenu />}
                    </div>
                    <p
                    onClick={() => handleContent('insights', true) || handleContentVisible('insights', !insightsContentVisible)}
                    className={activeMenu === 'insights' ? 'active-link' : ''}
                    >
                    <span>Featured Insights</span>
                    <span>
                        <SlArrowRight size={10} />
                    </span>
                    </p>
                    <div className="navbar__mini-menu-content">
                    {insightsContentVisible && <InsightsMenu />}
                    </div>
                    <p
                    onClick={() => handleContent('about', true) || handleContentVisible('about', !aboutContentVisible)}
                    className={activeMenu === 'about' ? 'active-link' : ''}
                    >
                    <span>About Us</span>
                    <span>
                        <SlArrowRight size={10} />
                    </span>
                    </p>
                    <div className="navbar__mini-menu-content">
                    {aboutContentVisible && <AboutMenu />}
                    </div>
              </div>
              <p>
                <a href="/careers">Careers</a>
              </p>
              <p>
                <a href="/about-us/blog">Blog</a>
              </p>
              <p>
                <a href="#subscribe">Email Subscriptions</a>
              </p>
              <p>
                <a href="#sign-in">Sign In</a>
              </p>
            </div>
          </div>
          <div className="navbar__menu-links__details">
            <div className="navbar__menu-links__search">
              <input type="text" placeholder="Type to search..." />
              <button>
                <RiSearchLine size={40} />
              </button>
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
      <div className="aboutnavbar__menu">
        <div>
          <p>About Us</p>
        </div>
        <div className="aboutnavbar__menu-content">
          <div id="about-overview">
            <p>
              <Link to="/about-us">Overview</Link>
            </p>
          </div>
          <div>
            <p
              onMouseOver={() => {
                setAboutDropdown(!aboutDropdown);
              }}
            >
              Who We Are
            </p>
            <div
              className={`aboutdrop-down-menu ${
                aboutDropdown ? 'isactive' : ''
              }`}
              onMouseLeave={handleAboutDropdownLeave}
            >
              <div className="aboutdrop-down-menu-container">
                {/* enter correct links to pages */}
                <AboutUs
                  linkUrl={'/about-us/our-team'}
                  linkItem={'Our Team'}
                />
                <AboutUs
                  linkUrl={'/about-us/our-purpose-mission-and-values'}
                  linkItem={'Purpose, Mission & Values'}
                />
                <AboutUs
                  linkUrl={'/about-us/history-of-our-firm'}
                  linkItem={'History of Our Firm'}
                />
                <AboutUs
                  linkUrl={'/about-us/our-governance'}
                  linkItem={'Our Governance'}
                />
              </div>
            </div>
          </div>
          <p>
            <Link to="/about-us/how-we-work">How We Work</Link>
          </p>
          <p>
            <Link to="/about-us/media">Media</Link>
          </p>
        </div>
      </div>
      <div className="aboutnavbar__search">
        <p>
          <a href="">Sign In</a> | <a href="">Subscribe</a>
        </p>
        <p>
          <a href="">
            <RiSearchLine size={20} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutNavbar;

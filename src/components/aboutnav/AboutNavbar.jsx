import React, { useState, useEffect, useReducer } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiMenuLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import './aboutnavbar.css';
import { Link } from 'react-router-dom';
import AboutUs from '../../container/dropdowns/AboutUs';
import List from '../../data/List';
import { IndustriesMenu, ServicesMenu, InsightsMenu, AboutMenu, MobileIndustriesMenu, MobileAboutMenu, MobileInsightsMenu, MobileServicesMenu} from '../../container';

const AboutNavbar = () => {
  //show data on typing in the input
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // SEARCH FUNCTIONALITY
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'inputText':
        return {
        ...state,
          inputText: action.payload,
        };
      case'showData':
        return {
        ...state,
          showData: action.payload,
        };
      default:
        return state;
    }
  }, {
    inputText: '',
    showData: '',
  });

  const { inputText, showData } = state;

  const handleInputText = (e) => {
    dispatch({ type: 'inputText', payload: e.target.value });
  };
  
  const handleShowData = (e) => {
    dispatch({ type: 'showData', payload: e.target.value });
  };
  
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    dispatch({ type: 'inputText', payload: lowerCase });
  };
  // SEARCHBAR DISPLAY FUNCTION
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

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

  
  const [mobileInsightsVisible, setMobileInsightsVisible] = useState(false);
  const [mobileAboutVisible, setMobileAboutVisible] = useState(false);
  const [mobileServicesVisible, setMobileServicesVisible] = useState(false);
  const [mobileIndustriesVisible, setMobileIndustriesVisible] = useState(false);

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
        if (section === 'insights') {
          setMobileInsightsVisible(flag); // Set the visibility of MobileInsightsMenu
        }
        else if (section === 'about') {
          setMobileAboutVisible(flag); // Set the visibility of MobileAboutMenu
        }
        else if (section === 'services') {
          setMobileServicesVisible(flag); // Set the visibility of MobileServicesMenu
        }
        else if (section === 'industries') {
          setMobileIndustriesVisible(flag); // Set the visibility of MobileIndustriesMenu
        }
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
                  onClick={() =>
                    handleContent('industries', true) ||
                    handleContentVisible('industries', !industriesContentVisible)
                  }
                  className={activeMenu === 'industries' ? 'active-link' : ''}
                >
                  <span>Industries</span>
                  <span>{industriesContentVisible ? (  <SlArrowRight color="white" size={15} />) : (  <SlArrowRight color="white" size={15} />)}
                  </span>
                </p>
                {/* Display menu for devices <768px */}
                <div className={`navbar__mini-menu-content ${mobileIndustriesVisible ? 'active' : ''}`} data-aos='slide-left'>
                  <h4>
                    <span onClick={() => handleContent('industries', false)}>
                      <SlArrowLeft color="black" size={15} />
                    </span>
                    Industries
                  </h4>
                  {mobileIndustriesVisible && <MobileIndustriesMenu />}
                </div>
                <p
                  onClick={() =>
                    handleContent('services', true) ||
                    handleContentVisible('services', !servicesContentVisible)
                  }
                  className={activeMenu === 'services' ? 'active-link' : ''}
                >
                  <span>Services</span>
                  <span>{servicesContentVisible ? (  <SlArrowRight color="white" size={15} />) : (  <SlArrowRight color="white" size={15} />)}
                  </span>
                </p>
                <div className={`navbar__mini-menu-content ${mobileServicesVisible ? 'active' : ''}`} data-aos='slide-left'>
                  <h4>
                    <span onClick={() => handleContent('services', false)}>
                      <SlArrowLeft color="black" size={15} />
                    </span>
                    Services
                  </h4>
                  {mobileServicesVisible && <MobileServicesMenu />}
                </div>

                <p
                  onClick={() =>
                    handleContent('insights', true) ||
                    handleContentVisible('insights', !insightsContentVisible)
                  }
                  className={activeMenu === 'insights' ? 'active-link' : ''}
                >
                  <span>Featured Insights</span>
                  <span>
                    {insightsContentVisible ? (  <SlArrowRight color="white" size={15} />) : (  <SlArrowRight color="white" size={15} />)}
                  </span>
                </p>
                <div className={`navbar__mini-menu-content ${mobileInsightsVisible ? 'active' : ''}`} data-aos='slide-left'>
                  <h4>
                    <span onClick={() => handleContent('insights', false)}>
                      <SlArrowLeft color="black" size={15} />
                    </span>
                    Featured Insights
                  </h4>
                  {mobileInsightsVisible && <MobileInsightsMenu />}
                </div>

                <p
                  onClick={() =>
                    handleContent('about', true) ||
                    handleContentVisible('about', !aboutContentVisible)
                  }
                  className={activeMenu === 'about' ? 'active-link' : ''}
                >
                  <span>About Us</span>
                  <span>
                    {aboutContentVisible ? <SlArrowRight color='white' size={15} /> : <SlArrowRight color='white' size={15} />}
                  </span>
                  </p>
                  <div className={`navbar__mini-menu-content ${mobileAboutVisible ? 'active' : ''}`} data-aos='slide-left'>
                    <h4>
                      <span onClick={() => handleContent('about', false)}>
                        <SlArrowLeft color="black" size={15} />
                      </span>
                      About Us
                    </h4>
                    {mobileAboutVisible && <MobileAboutMenu />}
                  </div>
              </div>
              <p><a href="/careers">Careers</a></p>
              <p><a href="/about-us/blog">Blog</a></p>
              <p><a href="#subscribe">Email Subscriptions</a></p>
              <p><a href="#sign-in">Sign In</a></p>
            </div>
          </div>
          <div className="navbar__menu-links__details">
            <div className='hm-search-bar'>
              <div className="navbar__menu-links__search">
                <input name='search' type="text" onChange={inputHandler} onClick={handleInputText} onKeyUp={handleShowData} placeholder="Type to search..." />
                <button><RiSearchLine size={40} /></button>
              </div>
              {showData && (
                  <div className={`navbar__menu-links__search-results__container ${showData ? 'display' : ''}`}>
                    <List input={inputText} />
                  </div>
                )}
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
              <ul className="aboutdrop-down-menu-container">
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
              </ul>
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
        <p><a href="/">Sign In</a> | <a href="/">Subscribe</a></p>
        <p onClick={handleShowSearchBar}><RiSearchLine size={25} color='black'/></p>
        {showSearchBar && (
          <div className={`navbar__search-bar__container ${showSearchBar? 'display' : ''}`} id='hamburger-curtain'>
            <div className='hm-navsearch-bar'>
              <div className="navbar__menu-links__searchbar">
                <input name='search' type="text" onChange={inputHandler} onClick={handleInputText} onKeyUp={handleShowData} placeholder="Type to search..." />
                <button onClick={handleShowSearchBar}><RiCloseLine size={45} /></button>
                <button><RiSearchLine size={40} /></button>
              </div>
              {showData && (
                  <div className={`navbar__menu-links__searchbar-results__container ${showData ? 'display' : ''}`}>
                    <List input={inputText} />
                  </div>
              )}
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default AboutNavbar;

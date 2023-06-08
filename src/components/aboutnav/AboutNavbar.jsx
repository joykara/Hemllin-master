/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { RiMenuLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import './aboutnavbar.css';
import { Link } from 'react-router-dom';
import AboutUs from '../../container/dropdowns/AboutUs';
import {IndustriesMenu, ServicesMenu, InsightsMenu, AboutMenu} from '../../container';


const AboutNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

// handle... is used to toggle the menu on and off
    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
        handleAboutContent();
    };

    const handleIndustriesContent = () => {
        setIndustriesContent(true);
        setServicesContent(false);
        setInsightsContent(false);
        setAboutContent(false);
    }
    const handleServicesContent = () => {
        setServicesContent(true);
        setIndustriesContent(false);
        setInsightsContent(false);
        setAboutContent(false);
    }
    const handleInsightsContent = () => {
        setInsightsContent(true);
        setIndustriesContent(false);
        setServicesContent(false);
        setAboutContent(false);
    }
    const handleAboutContent = () => {
        setAboutContent(true);
        setIndustriesContent(false);
        setServicesContent(false);
        setInsightsContent(false);
    }


    const [aboutDropdown, setAboutDropdown] = useState(false);
    // const [dropdown2, setDropdown2] = useState(false);
    const handleAboutDropdownLeave = () => {
        setAboutDropdown(false);
    };
    const [industriesContent, setIndustriesContent] = useState(false);
    const [servicesContent, setServicesContent] = useState(false);
    const [insightsContent, setInsightsContent] = useState(false);
    const [aboutContent, setAboutContent] = useState(false);

    return (
        <div className="aboutnavbar">
            <div className="aboutnavbar__logo">
                <button onClick={handleToggle}>
                    {toggleMenu ? <RiCloseLine size={50} /> : <RiMenuLine size={40} />}
                </button>
                <p><Link to='/'>Logo</Link></p>
            </div>
            {toggleMenu && (
                <div className={`navbar__menu-links ${toggleMenu ? 'show' : ''}`}>
                    <div className="navbar__menu-links__container">
                        <div className="navbar__menu-links-top">
                            <button onClick={handleToggle}>
                                {toggleMenu ? <RiCloseLine color="#fff" size={45} /> : <RiMenuLine color="#fff" size={30} />}
                            </button>
                            <p><Link to='/'>Logo</Link></p>
                        </div>
                        <div className="menu">
                            <div className="show-menu">
                                <p onClick={handleIndustriesContent}>
                                    Industries
                                </p>
                                <p onClick={handleServicesContent}>
                                    Services
                                </p>
                                <p onClick={handleInsightsContent}>
                                    Featured Insights
                                </p>
                                <p onClick={handleAboutContent}>
                                    About Us
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
                            <input type="text" placeholder='Type to search...' />
                            <button><RiSearchLine size={40}/></button>
                        </div>
                        <div className="navbar__menu-link__content">
                            {industriesContent && <IndustriesMenu />}
                            {servicesContent && <ServicesMenu />}
                            {insightsContent && <InsightsMenu />}
                            {aboutContent && <AboutMenu/>}
                        </div>
                    </div>
                </div>
            )}
            <div className="aboutnavbar__menu">
                <div>About Us</div>
                <div className="aboutnavbar__menu-content">
                    <div id='about-overview'>
                        <p>Overview</p>
                    </div>
                    <div>
                        <p onMouseOver={()=> {setAboutDropdown(!aboutDropdown)}} >Who We Are</p>
                        <div className={`aboutdrop-down-menu ${aboutDropdown ? 'isactive' : ''}`} onMouseLeave={handleAboutDropdownLeave}>
                            <div className='aboutdrop-down-menu-container'>
                            {/* enter correct links to pages */}
                               <AboutUs linkUrl={'/about-us/our-team'} linkItem={'Our Team'}/>
                                <AboutUs linkUrl={'/about-us/our-purpose-mission-and-values'} linkItem={'Purpose, Mission & Values'}/>
                                <AboutUs linkUrl={'/about-us/history-of-our-firm'} linkItem={'History of Our Firm'}/>    
                                <AboutUs linkUrl={'/about-us/our-governance'} linkItem={'Our Governance'}/>   
                            </div>
                        </div>
                    </div>
                    <p><Link to='/careers'>How We Work</Link></p>
                    <p><Link to='/about-us/media'>Media</Link></p>
                    <p><Link to='/about-us/blog'>Hemllin Blog</Link></p>
                </div>
            </div>
            <div className="aboutnavbar__search">
                <p><a href="">Sign In</a> | <a href="">Subscribe</a></p>
                <p><a href=""><RiSearchLine size={20}/></a></p>
            </div>
        </div>
  )
}

export default AboutNavbar
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { RiMenuLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';
import {IndustriesMenu, ServicesMenu, InsightsMenu, AboutMenu} from '../../container';
// import arrow from '../../assets/Vector.png';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    };
    const handleIndustriesContent = () => {
        setDropdown(false);
        setIndustriesContent(true);
        setServicesContent(false);
        setInsightsContent(false);
        setAboutContent(false);
    }
    const handleServicesContent = () => {
        setDropdown2(false);
        setServicesContent(true);
        setIndustriesContent(false);
        setInsightsContent(false);
        setAboutContent(false);
    }
    const handleInsightsContent = () => {
        setDropdown3(false);
        setInsightsContent(true);
        setIndustriesContent(false);
        setServicesContent(false);
        setAboutContent(false);
    }
    const handleAboutContent = () => {
        setDropdown4(false);
        setAboutContent(true);
        setIndustriesContent(false);
        setServicesContent(false);
        setInsightsContent(false);
    }


    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);

    const [industriesContent, setIndustriesContent] = useState(false);
    const [servicesContent, setServicesContent] = useState(false);
    const [insightsContent, setInsightsContent] = useState(false);
    const [aboutContent, setAboutContent] = useState(false);


    return (
        <div className="navbar">
            <div className="navbar__logo">
                <button onClick={handleToggle}>
                    {toggleMenu ? <RiCloseLine size={50} /> : <RiMenuLine size={40} />}
                </button>
                {/* <p><a href="/"> Logo </a></p> */}
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
                            <p><a href="/about/blog">Blog</a></p>
                            <p><a href="#subscribe">Email Subscriptions</a></p>
                            <p><a href="#sign-in">Sign In</a></p>
                        </div>
                    </div>
                    <div className="navbar__menu-links__details">
                        <div className="navbar__menu-links__search">
                            <input type="text" />
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
            <div className="navbar__menu">
                <div className="navbar__menu-content">
                    <div>
                        <p onMouseEnter={()=> {setDropdown(!dropdown)}}>Industries</p>
                        <div className={`drop-down-menu ${dropdown ? 'active' : ''}`}>
                            <div className='drop-down-menu-container'>
                                <IndustriesMenu />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p onMouseEnter={()=> {setDropdown2(!dropdown2)}}onMouseLeave={()=> {setDropdown2(!dropdown2)}}><a href="/services">Services</a></p>
                        <div className={`drop-down-menu2 ${dropdown2 ? 'active2' : ''}`}>
                            <div className='drop-down-menu-container'>
                                <ServicesMenu />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p onMouseEnter={()=> {setDropdown3(!dropdown3)}}onMouseLeave={()=> {setDropdown3(!dropdown3)}}>Featured Insights</p>
                        <div className={`drop-down-menu3 ${dropdown3 ? 'active3' : ''}`}>
                            <div className='drop-down-menu-container'>
                                <InsightsMenu />
                            </div>
                        </div>
                    </div>
                    <p>Careers</p>
                    <p><a href="/about/blog">Blog</a></p>
                    <p>About Us</p>
                </div>
                
            </div>
            <div className="navbar__search">
                <p><a href="">Sign In</a> | <a href="">Subscribe</a></p>
                <p><a href=""><RiSearchLine size={20}/></a></p>
            </div>
        </div>
  )
}

export default Navbar
import React, {useState} from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './industriesnavbar.css';
import { Link } from 'react-router-dom';


const Menu = () => (
    <>
        <p><a href="/" >Industries</a></p>
        <p><a href="/">Services</a></p>
        <p><a href="/">Featured Insights</a></p>
        <p><a href="/">Careers</a></p>
        <p><a href="/">Blog</a></p>
        <p><a href="/">About Us</a></p>
    </>
)

const IndustriesNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    };

  return (
    <div className="industry-nav">
        <div className="industry__logo">               
            <p><Link to='/'>Logo</Link></p>
        </div>
        {toggleMenu && (
            <div className={`industry__menu-links ${toggleMenu ? 'show' : ''}`}>
                <div className="industry__menu-links__container">
                    <div className="industry__menu-links-top">
                    </div>
                    <div className="menu">
                        <Menu/>
                    </div>
                </div>
            </div>
        )}
        
        <div className="industry__toogle-menu">
            <button onClick={handleToggle}>
                {toggleMenu ? <RiCloseLine size={50} /> : <RiMenuLine size={40} />}
            </button>
        </div>
    </div>
  )
}

export default IndustriesNavbar
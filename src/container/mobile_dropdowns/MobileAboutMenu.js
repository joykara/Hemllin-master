import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import './mobile_dropdown.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MobileAboutMenu = () => {
    useEffect(() => {
      AOS.init({
          duration: 1000,
          delay: 0,
      });
  }, []
  ); //onscroll animation
  return (
    <>
          <div className="mb-about-us-list" data-aos='slide-left'>
              <div id="title">
                  <h3>About Us</h3>
                  <p><Link>About Us Overview</Link><BsArrowRight/></p>
              </div>
              <div id="sections">
                <div className="mb-about-us-sections">
                    <h4>WHO WE ARE</h4>
                    <ul>
                        <li className='mb-about-us-dropdown-item'>
                            <a href='/about-us/our-team'>Our Team</a>
                        </li>
                        <li className='mb-about-us-dropdown-item'>
                            <a href='/about-us/our-purpose-mission-and-values'>Purpose, Mission & Values</a>
                        </li>
                        <li className='mb-about-us-dropdown-item'>
                            <a href='/about-us/our-governance'>Our Governance</a>
                        </li>
                        <li className='mb-about-us-dropdown-item'>
                            <a href='/about-us/history-of-our-firm'>History of Our Firm</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-about-us-sections">
                    <p><Link to="/about-us/how-we-work">HOW WE WORK</Link></p>
                    <p><Link to="/about-us/media"> MEDIA </Link></p>
                </div>
              </div>
        </div>
      </>
  )
}

export default MobileAboutMenu
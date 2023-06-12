import React from 'react'
import { Link } from 'react-router-dom'

const AboutMenu = () => {
  return (
    <>
        <div className="about-us-list">
              <h3>About Us</h3>
              <div id="sections">
                <div className="about-us-sections">
                    <h4>WHO WE ARE</h4>
                    <ul>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/our-team'>Our Team</a>
                        </li>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/our-purpose-mission-and-values'>Purpose, Mission & Values</a>
                        </li>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/our-governance'>Our Governance</a>
                        </li>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/history-of-our-firm'>History of Our Firm</a>
                        </li>
                    </ul>
                </div>
                <div className="about-us-sections">
                    <h4>HOW WE WORK</h4>
                    <ul>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/agriculture'>Agriculture</a>
                        </li>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/automotive'>Automotive</a>
                        </li>
                        <li className='about-us-dropdown-item'>
                            <a href='/about-us/education'>Education</a>
                        </li>
                    </ul>
                </div>
                <div className="about-us-sections">
                    <p><Link to="/about-us/media"> MEDIA </Link></p>
                </div>
              </div>
        </div>
      </>
  )
}

export default AboutMenu
import React from 'react'
import { Link } from 'react-router-dom'

const AboutMenu = () => {
  return (
    <>
        <div className="about-us-list">
              <h3>About Us</h3>
              <div className="about-us-sections">
                  <h4>WHO WE ARE</h4>
                  <ul>
                    <li className='industries-dropdown-item'>
                        <a href='/about/our-team'>Agriculture</a>
                    </li>
                    <li className='industries-dropdown-item'>
                        <a href='/about/our-purpose-mission-and-values'>Automative</a>
                    </li>
                    <li className='industries-dropdown-item'>
                        <a href='/industries/education'>Education</a>
                    </li>
                </ul>
              </div>
              <div className="about-us-sections">
                  <h4>HOW WE WORK</h4>
                  <ul>
                    <li className='industries-dropdown-item'>
                        <a href='/industries/agriculture'>Agriculture</a>
                    </li>
                    <li className='industries-dropdown-item'>
                        <a href='/industries/automative'>Automative</a>
                    </li>
                    <li className='industries-dropdown-item'>
                        <a href='/industries/education'>Education</a>
                    </li>
                </ul>
              </div>
              <div className="about-us-sections">
                  <h4><Link to="/about-us/media"> MEDIA </Link></h4>
              </div>
              <div className="about-us-sections">
                  <h4><Link to="/about-us/blog"> BLOG </Link></h4>
              </div>
        </div>
      </>
  )
}

export default AboutMenu
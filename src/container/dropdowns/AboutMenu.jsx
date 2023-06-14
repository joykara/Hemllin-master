import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const AboutMenu = () => {
  return (
    <>
          <div className="about-us-list">
              <div id="title">
                  <h3>About Us</h3>
                  <p><Link>About Us Overview</Link><BsArrowRight/></p>
              </div>
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
                    <p><Link to="/about-us/how-we-work">HOW WE WORK</Link></p>
                    <p><Link to="/about-us/media"> MEDIA </Link></p>
                </div>
              </div>
        </div>
      </>
  )
}

export default AboutMenu
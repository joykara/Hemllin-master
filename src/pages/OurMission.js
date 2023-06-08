/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Footer, AboutNavbar } from '../components';
import arrow from '../assets/Vector.png'
import rightArrow from '../assets/arrow.png'

const Mission = () => {
  return (
    <>
        <AboutNavbar/>
        <div className="mission-container">
            <div className="mission-content">
                <a href="/about-us"><span className='arrow'><img src={arrow} alt="arrow nav" />Back to About Us Overview</span></a>
                <div className="mission-content-intro">
                    <h2>Our Purpose, Mission and Values</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium </p>
                </div>
                <div className="mission-content-intro">
                    <h3>Our Purpose</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium</p>
                </div>
                <div className="mission-content-intro">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium</p>
                </div>
                <div className="mission-content-intro">
                    <h3>Our Values</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>

            <div className="mission-other-content">
                <h4>Our Purpose</h4>
                <div className="mission-other-content--right">
                    <div className='mission-other-content-image'>
                    </div>
                    <div className='mission-other-content-text'>
                        <button type='button'><a href="">Careers <span className='arrow'><img src={rightArrow} alt="arrow nav" /></span></a></button>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className="mission-other-content--right">
                    <div className='mission-other-content-image'>
                    </div>
                    <div className='mission-other-content-text'>
                        <button type='button'><a href="">Careers <span className='arrow'><img src={rightArrow} alt="arrow nav" /></span></a></button>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Mission
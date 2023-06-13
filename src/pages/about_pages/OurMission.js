/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Footer, AboutNavbar } from '../../components';
import arrow from '../../assets/Vector.png'
import rightArrow from '../../assets/arrow.png'
import ourHistory from '../../assets/history.png';
import ourTeam from '../../assets/team.png'

const Mission = () => {
  return (
    <>
        <AboutNavbar/>
        <div className="mission-container">
            <div className="mission-content">
                <a href="/about-us"><span className='arrow links-font'><img src={arrow} alt="arrow nav" />Back to About Us Overview</span></a>
                <div className="mission-content-intro">
                    <h2>Our Purpose, Mission and Values</h2>
                    <p className='links-font'>To help our clients understand their unique needs and aspirations, push the boundaries, challenge the status quo, and strive for greatness in everything they do.</p>

                    <p>At the core of our consultancy firm, founded and led by Director Collins China, lies a strong commitment to our values. These values are rooted in the visionary thinking of our founder and the influential contributions of his team, who play a pivotal role in shaping our firm. While our values have evolved over time to align with the changing landscape, they continue to serve as the guiding principles for our long-term strategy and daily interactions with clients. Additionally, we dedicate a time for collective reflection, allowing us to deeply contemplate how our values impact both our work and personal lives. As a consultancy firm, we take great pride in our five-year journey and remain dedicated to upholding these values that define us.</p>
                </div>
                <div className="mission-content-intro">
                    <h3>Our Purpose</h3>
                    <p>To always have an unwavering commitment to making a difference.</p>
                </div>
                <div className="mission-content-intro">
                    <h3>Our Mission</h3>
                    <p>To help our clients understand their unique needs and aspirations, push the boundaries, challenge the status quo, and strive for greatness in everything they do.</p>
                </div>
                <div className="mission-content-intro">
                    <h3>Our Values</h3>
                    <h4>Privacy: Confidentiality is our Priority</h4>
                    <p>
                        We value your trust and safeguard your information with utmost care. Our commitment to privacy ensures that your sensitive data remains secure, allowing you to share and collaborate with confidence.
                    </p>
                    <h4>Integrity: Ethics at the Core.</h4>
                    <p>
                        We value your trust and safeguard your information with utmost care. Our commitment to privacy ensures that your sensitive data remains secure, allowing you to share and collaborate with confidence.
                    </p>
                    <h4>Accountability: Your Success is Our Responsibility</h4>
                    <p>
                        We take full ownership of our actions and outcomes. With a strong sense of accountability, we ensure that our recommendations and solutions deliver measurable results, driving your business forward.
                    </p>
                    <h4>Innovation: Pioneering Solutions for the Future.</h4>
                    <p>
                        We embrace the power of innovation to propel your business beyond boundaries. Our creative and forward-thinking approach enables us to uncover groundbreaking ideas and transformative strategies that shape industries.
                    </p>
                    <h4>Quality: Excellence in Every Detail.</h4>
                    <p>
                        We are relentless in our pursuit of quality. From meticulous research to flawless execution, our dedicated team strives for excellence at every stage. With an unwavering commitment to delivering top-notch services, we exceed your expectations.
                    </p>
                </div>
            </div>

            <div className="mission-other-content">
                <h4>OUR HISTORY</h4>
                <div className="mission-other-content--right">
                    <div className='mission-other-content-image1'>
                        <img src={ourHistory} alt="arrow nav" />
                    </div>
                    <div className='mission-other-content-text'>
                        <button type='button'><a href="/about-us/history-of-our-firm">HISTORY OF OUR FIRM<span className='arrow'><img src={rightArrow} alt="arrow nav" /></span></a></button>
                        <p>Learn more about our firm.</p>
                    </div>
                </div>
                <div className="mission-other-content--right">
                    <div className='mission-other-content-image2'>
                        <img src={ourTeam} alt="arrow nav" />
                    </div>
                    <div className='mission-other-content-text'>
                        <button type='button'><a href="">OUR TEAM<span className='arrow'><img src={rightArrow} alt="arrow nav" /></span></a></button>
                        <p>Learn more about our team.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Mission
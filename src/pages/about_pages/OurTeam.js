import React from 'react';
import { Footer, AboutNavbar } from '../../components';
import arrow from '../../assets/Vector.png';
import ourHistory from '../../assets/history.png';
import ourPurpose from '../../assets/how-we-work.png'
import './about-pages.css'
import { Link } from 'react-router-dom';

const OurTeam = () => {
  return (
    <>
        <AboutNavbar />
        <div className='hm-ot-container'>
            <a id='back' href="/about-us"><span className='arrow links-font'><img src={arrow} alt="arrow nav" />Back to About Us Overview</span></a>
            
            <div className='hm-ot-content'>
                <div className='hm-ot-content-intro'>
                    <div className='hm-ot-title'>
                        <h1>Our Team</h1>
                        <p>Our team is made up of a diverse group of talented individuals who are passionate about helping our clients achieve their goals. We are a team of consultants, designers, developers, and strategists who are committed to delivering exceptional results. We are driven by our core values of excellence, integrity, and collaboration, and we strive to make a positive impact on our clients, our community, and our world.</p>
                    </div>
                </div>
                <div className='hm-ot-content-details'>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>Our Team</p>
                            <p>CE0- Founder</p>
                        </div>
                    </div>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>Our Team</p>
                            <p>CE0- Founder</p>
                        </div>
                    </div>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>Our Team</p>
                            <p>CE0- Founder</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div className="hww-other-content">
                <div className="hww-other-content__details">
                    <h4>RELATED</h4>
                    <div className='hww-other-content-link__container'>
                        <div className="hww-other-content-link scale-up">
                            <div className='hww-other--link-image'>
                                <img src={ourHistory} alt="our history" />
                            </div>
                            <div className='hww-other--link-text'>
                                <h2><Link to='/about-us/history-of-our-firm'>Our History</Link></h2>
                                <p>Learn more about our journey and how we got to where we are today.</p>
                            </div>
                        </div>
                        <div className="hww-other-content-link scale-up">
                            <div className='hww-other--link-image'>
                                <img src={ourPurpose} alt="our history" />
                            </div>
                            <div className='hww-other--link-text'>
                                <h2><Link to='/about-us/history-of-our-firm'>Our Purpose, Mission and Values</Link></h2>
                                <p>Learn more about our journey and how we got to where we are today.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default OurTeam
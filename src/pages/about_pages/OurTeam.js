import React from 'react';
import { Footer, AboutNavbar } from '../../components';
import arrow from '../../assets/Vector.png';
import ourHistory from '../../assets/history.png';
import ourPurpose from '../../assets/how-we-work.png'
import './about-pages.css'
import { Link } from 'react-router-dom';
import collins from '../../assets/team/collins0.jpg';
import arthur from '../../assets/team/Arthur1.jpg';
import kevin from '../../assets/team/kevin.jpg';
import cynthia from '../../assets/team/Cynthia.jpeg'
import shadrack from '../../assets/team/Shadrack1.jpeg'

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
                            <img src={collins} alt="durector" />
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>Beyond imagination</p>
                            <p>COLLINS.K.CHINA</p>
                            <p><span>DIRECTOR</span></p>
                        </div>
                    </div>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                            <img src={arthur} alt="manager" />
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>If you cannot do great things, do small things in a great way.</p>
                            <p>ARTHUR.S.NASIVILI</p>
                            <p><span>BUSINESS DEVELOPMENT MANAGER</span></p>
                        </div>
                    </div>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                            <img src={kevin} alt="finance" />
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>The mind that opens up to a new idea never returns to its original size.</p>
                            <p>KEVIN WEKESA</p>
                            <p><span>STRATEGY CONSULTANT</span></p>
                        </div>
                    </div>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                            <img src={shadrack} alt="finance" />
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>Seize the moment today, for tomorrow remains elusive</p>
                              <p>SHADRACK WATIMA</p>
                              <p><span>ADMINISTRATOR</span></p>
                        </div>
                    </div>
                    <div className='hm-ot-member-detail'>
                        <div className='hm-ot-member-detail-img'>
                            <img src={cynthia} alt="finance" />
                        </div>
                        <div className='hm-ot-member-detail-text'>
                            <p>Seize the moment today, for tomorrow remains elusive</p>
                            <p>CYNTHIA MWAMATI</p>
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
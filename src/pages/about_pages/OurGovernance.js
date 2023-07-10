import React from 'react';
import { Footer, AboutNavbar } from '../../components';
import './about-pages.css'
import ourGov from '../../assets/operations .jpg';
import team from '../../assets/team.png';
import history from '../../assets/history.png';
import purpose from '../../assets/how-we-work.png';
import about from '../../assets/hr.jpg';
import media from '../../assets/education.png';
import { Link } from 'react-router-dom';

const OurGovernance = () => {
  return (
    <>
        <AboutNavbar/>
        <div className='hm-governance-container'>
            <div className='hm-governance-title'>
              <div className='hm-gov-image01'>
                <img src={ourGov} alt="" />
              </div>
              <div className='hm-gov-intro-text'>
                <h3>Our Governance</h3>
              </div>
            </div>
            <div className='hm-governance-content'>
              <div className='hm-gov-content01 sub-text'>
                <p>We are committed to creating positive, enduring change through our work with clients and the way we run our firm. </p>
              </div>

              <div className='hm-gov-content02'>
                <h4>LEADERSHIP AND POLICIES</h4>
                <div className='hm-gov-sub-content scale-up'>
                  <div className='hm-gov-sub-content-image01'>
                    <img src={team} alt="" />
                  </div>
                  <div className='hm-gov-sub-content-text'>
                    <h3><Link to={'/about-us/our-team'}>Our Team</Link></h3>
                    <p>Our people are our most valuable asset. We are committed to creating an environment where they can be their best selves, make a difference, and have a great time doing it.
                    </p>
                  </div>
                </div>
              </div>

              <div className='hm-gov-content03'>
                <div className='hm-gov-sub-content2'>
                  <div className='hm-gov-sub-content-image02'></div>
                  <div className='hm-gov-sub-content-text2'>
                    <h5>Lorem Ipsum dolor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  </div>
                </div>
                <div className='hm-gov-sub-content2'>
                  <div className='hm-gov-sub-content-image02'></div>
                  <div className='hm-gov-sub-content-text2'>
                    <h5>Lorem Ipsum dolor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  </div>
                </div>
              </div>

              <div className='hm-gov-content04'>
                <h4>WHAT GUIDES US</h4>
                <div className='hm-gov-sub-content scale-up'>
                  <div className='hm-gov-sub-content-image01'>
                    <img src={purpose} alt="" />
                  </div>
                  <div className='hm-gov-sub-content-text'>
                    <h3><Link to={'/about-us/our-purpose-mission-and-values'}>Our Purpose Mission and Values</Link></h3>
                    <p>Our purpose is to create positive, enduring change in the world. Our mission is to help our clients achieve such high levels of excellence that together we set new standards of performance and create a sustainable impact in their industries. We support this mission by adhering to our enduring set of values.
                    </p>
                  </div>
                </div>
              </div>

{/*               <div className='hm-gov-content05-intro'>
                <div id='hm-gov-content05' className='sub-text'>
                      <h4>Lorem Ipsum dolor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio</p>
                </div>
                <div className='hm-gov-content05'>
                  <div className='hm-gov-sub-content2'>
                    <div className='hm-gov-sub-content-image02'></div>
                    <div className='hm-gov-sub-content-text2'>
                      <h5>Lorem Ipsum dolor</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                  </div>
                  <div className='hm-gov-sub-content2'>
                    <div className='hm-gov-sub-content-image02'></div>
                    <div className='hm-gov-sub-content-text2'>
                      <h5>Lorem Ipsum dolor</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='hm-gov-content06'>
                <div className='hm-gov-content06-info sub-text'>
                  <h4>Lorem Ipsum dolor</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio</p>
                </div>
                <div className='hm-gov-sub-content3'>
                  <div className='hm-gov-sub-content-details scale-up'>
                    <div className='hm-gov-sub-content-detail-image'></div>
                    <div className='hm-gov-sub-content-detail-text'>
                      <h4>Lorem Ipsum dolor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio</p>
                    </div>
                  </div>
                  <div className='hm-gov-sub-content-details scale-up'>
                    <div className='hm-gov-sub-content-detail-image'></div>
                    <div className='hm-gov-sub-content-detail-text'>
                      <h4>Lorem Ipsum dolor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio</p>
                    </div>
                  </div>
                  <div className='hm-gov-sub-content-details scale-up'>
                    <div className='hm-gov-sub-content-detail-image'></div>
                    <div className='hm-gov-sub-content-detail-text'>
                      <h4>Lorem Ipsum dolor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio</p>
                    </div>
                  </div>
                  <div className='hm-gov-sub-content-details scale-up'>
                    <div className='hm-gov-sub-content-detail-image'></div>
                    <div className='hm-gov-sub-content-detail-text'>
                      <h4>Lorem Ipsum dolor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className='hm-governance-more-info'>
              <h4>MORE ABOUT OUR FIRM</h4>
              <div className='hm-governance-more-info-content'>
                <div className='hm-governance-more-info-details scale-up'>
                  <div className='hm-governance-more-info-image'>
                  <img src={history} alt="" />
                </div>
                  <div className='hm-governance-more-info-text'>
                    <h4><Link to={'/about-us/history-of-our-firm'}>History of our Firm</Link> </h4>
                    <p>Learn more about Hemllin's history and impact. </p>
                  </div>
                </div>
                <div className='hm-governance-more-info-details scale-up'>
                  <div className='hm-governance-more-info-image'>
                    <img src={about} alt="" />
                  </div>
                  <div className='hm-governance-more-info-text'>
                    <h4><Link to={'/about-us'}>About Us</Link></h4>
                    <p>Our story begins with a vision of transforming businesses and empowering individuals to reach their full potential.</p>
                  </div>
                </div>
                <div className='hm-governance-more-info-details scale-up'>
                  <div className='hm-governance-more-info-image'>
                <img src={media} alt="" />
                  </div>
                  <div className='hm-governance-more-info-text'>
                    <h4><Link to={'/about-us/media'}>Media</Link> </h4>
                    <p>Visit our media center to find recent media coverage of Hemllin</p>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
        <Footer />
    </>
  )
}

export default OurGovernance
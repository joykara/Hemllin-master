import React from 'react';
import { Footer, Navbar2 } from '../../components';
import './service-pages.css';
import Cta from '../Cta';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <>
          <Navbar2 />
          <div className="education-container">
              <div className="hm-education-title">
                  <h4>SERVICES / EDUCATION CONSULTANCY</h4>
                  <p>Education consulting is intended to improve students' outcomes by increasing the accessibility and affordability of the education ecosystem.</p>
              </div>

              <div className="hm-education-intro">
                    <div className="hm-education-intro__text">
                      <h3>EDUCATION CONSULTANCY</h3>
                      <p>Although education is the key to life, many organizations must address the student's and parents' evolving needs. The education sector has faced significant reforms recently owing to the curriculum changes and the need to address the mismatch between knowledge and available employment opportunities. </p>
                      <p>Education consulting is intended to improve students' outcomes by increasing the accessibility and affordability of the education ecosystem. The global educational landscape has changed significantly as much as the labor market, meaning stakeholders should update their knowledge and expectations. </p> 
                      <p>At Hemllin, we work with students, parents, schools, and other beneficiaries with educational planning to improve educational experiences, facilities, and outcomes. We work with educational institutions and systems, philanthropists, governments, and investors to understand the sector's major challenges. We also help students map out their aspirations by pursuing relevant local and international opportunities. </p>
                  </div>

                  <div className="hm-education-content">
                        <div className="hm-education-options-container scale-up" >
                            <div className="hm-education-option__image">
                            </div>
                            <div className="hm-education-option__content">
                                <div className="hm-education-option__content__desc">
                                    <div className='hm-edu-step-number'>
                                        <h3>Our Services include:</h3>
                                    </div>
                                </div>
                                <div className="hm-education-option__content__list">
                                    <ul>
                                        <li>Organizational Operations</li>
                                        <li>Sales and Marketing Strategies </li>
                                        <li>Sourcing and Procurements</li>
                                        <li>Business Process education</li>
                                        <li>Research and Development</li>
                                        <li>Outsourcing</li>
                                        <li>Business transformation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hm-education-options-container scale-up" >
                            <div className="hm-education-option__image">
                            </div>
                            <div className="hm-education-option__content">
                                <div className="hm-education-option__content__desc">
                                    <div className='hm-edu-step-number'>
                                        <h3>Additionally: </h3>
                                    </div>
                                </div>
                                <div className="hm-education-option__content__list">
                                    <ul>
                                        <li>We also specialize in educational program planning for schools, colleges, and universities.</li>
                                        <li>We provide directions for systematic problem fixtures, improvisation of the learning atmosphere, and special and advanced training for teachers and faculties.</li>
                                        <li>We also offer student skill development and training programs with collaborations from the top coaching centers and institutes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div className="hm-education-footer">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="explore-services">
                    <h4>Explore</h4>
                    <div className="other-services-content">
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image"></div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/management'>Management Consultancy</Link></h4>
                                <article>At Hemllin, we work with students, parents, schools, and other beneficiaries with educational planning to improve educational experiences, facilities, and outcomes.</article>
                            </div>
                        </div>
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image"></div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/travel'>Travel Consultancy</Link></h4>
                                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
                            </div>
                        </div>
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image"></div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/training-and-coaching'>Coaching and Training</Link></h4>
                                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <Cta ctaTitle='Ready to Work with Us?' ctaLink1='/contact-us' ctaLink1Text='Book a Meeting'ctaLink2='/contact-us' ctaLink2Text='Contact Us'/>
          <Footer/>
      </>
  )
}

export default Education
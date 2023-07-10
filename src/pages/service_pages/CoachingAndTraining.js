import React from 'react';
import { Footer, Navbar2 } from '../../components';
import './service-pages.css';
import Cta from '../Cta';
import { Link } from 'react-router-dom';
import coaching_1 from '../../assets/coaching_1.jpg'
import coaching_2 from '../../assets/coaching_2.jpg'
import travel_1 from '../../assets/travel_1.jpg';
import hr from '../../assets/hr.jpg';
import education from '../../assets/education.png';

const CoachingAndTraining = () => {
  return (
    <>
          <Navbar2 />
          <div className="cntr-container">
              <div className="hm-cntr-title">
                  <h4>SERVICES / COACHING AND TRAINING CONSULTANCY</h4>
                  <p>Investing in coaching and training with us is an investment in your organisation's future. </p>
              </div>

              <div className="hm-cntr-intro custom-shape-divider-bottom-1688456518">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                  <div className="hm-cntr-intro__text">
                      <h4>COACHING AND TRAINING CONSULTANCY</h4>
                  </div>

                  <div className="hm-cntr-content">
                        <div className="hm-cntr-options-container" >
                          <div className="hm-cntr-option__image">
                              <img src={coaching_1} alt="Coaching and Training" />
                            </div>
                            <div className="hm-cntr-option__content">
                                <div className="hm-cntr-option__content__desc">
                                    <p>At Hemllin, we are dedicated to empowering individuals and organisations to reach their full potential through transformative coaching and comprehensive training programs. We understand that investing in the development of your employees is key to fostering a culture of continuous improvement and driving business success.</p>
                                    <p>Our team of highly skilled coaches and trainers bring a wealth of expertise across various industries, allowing us to design customised programs that cater to your specific needs. Whether you're seeking executive coaching to enhance leadership skills, sales training to boost revenue, or team-building workshops to improve collaboration, we have the knowledge and experience to deliver impactful results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-cntr-options-container scale-up">
                            <div className="hm-cntr-option__image">
                              <img src={coaching_2} alt="Coaching and Training" />
                            </div>
                            <div className="hm-cntr-option__content">
                                <div className="hm-cntr-option__content__desc">
                                  <p>Through our coaching services, we provide one-on-one support to executives, managers, and employees at all levels. Our coaches employ a collaborative and solution-focused approach to help individuals identify their strengths, overcome challenges, and unlock their full potential. By fostering self-awareness, developing effective communication skills, and nurturing leadership abilities, we empower individuals to thrive both professionally and personally. </p>
                                  <p>In addition to coaching, our training programs encompass a wide range of topics, from communication and interpersonal skills to project management and technical proficiency. We believe in delivering engaging and interactive sessions that facilitate knowledge retention and practical application. Our trainers utilise a variety of methodologies, including role-playing, case studies, and simulations, to ensure participants can transfer their learning directly into their daily work environment. </p>
                                  <p>At Hemllin, we are committed to delivering exceptional results. We measure our success by the positive impact we have on individuals and organisations. Through our programs, we aim to foster a culture of continuous learning, innovation, and growth. Our goal is to equip your workforce with the skills and mindset necessary to adapt to changing business landscapes and seize new opportunities.</p>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div className="hm-cntr-footer">
                  <h4>Investing in coaching and training with us is an investment in your organisation's future. </h4>
                  <p> Let us partner with you to develop a skilled, motivated, and high-performing workforce that drives sustainable success.</p>
              </div>
              <div className="explore-services">
                    <h4>Explore</h4>
                    <div className="other-services-content">
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                              <img src={education} alt="Education Consultancy" title="Education Consultancy" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/education'>Education Consultancy</Link></h4>
                                <article>Education consulting is intended to improve students' outcomes by increasing the accessibility and affordability of the education ecosystem. We ensure that you have the best possible chance of success in your educational journey.</article>
                            </div>
                        </div>
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                                <img src={travel_1} alt="Travel Consultancy" title="Travel Consultancy" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/travel'>Travel Consultancy</Link></h4>
                                <article>Traveling to differing destinations for diverse reasons is an aspiration for many people. Whether for education, touring, or employment, we provide the necessary information and guidance to achieve these objectives.</article>
                            </div>
                        </div>
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                                <img src={hr} alt="Human Resource Consulting" title="Management Consultancy"/>
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/management'>Management Consultancy</Link></h4>
                                <article>Management consulting comprises 50 percent of the industry because it is crucial in helping businesses achieve their objectives by equipping top leadership with indispensable strategies in increasing competitive advantage. </article>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          
          <Cta ctaTitle='Want to learn more about the other services we offer?' ctaLink1='/contact-us' ctaLink1Text='Contact Us'ctaLink2='/contact-us' ctaLink2Text='Contact Us'/>
          <Footer/>
      </>
  )
}

export default CoachingAndTraining
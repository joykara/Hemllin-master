import React from 'react';
import { Footer, Navbar2, ScrollToTop } from '../../components';
import './service-pages.css';
import Cta from '../Cta';
import { Link } from 'react-router-dom';
import coaching_1 from '../../assets/coaching_1.jpg';
import travel_1 from '../../assets/travel_1.jpg';
import overseas_education from '../../assets/education.png';
import career_coaching from '../../assets/career_coaching.jpg';
import language_training from '../../assets/language_training.jpeg';
import hr from '../../assets/hr.jpg';

const Education = () => {
  return (
    <>
          <Navbar2 />
          <div className="education-container">
              <div className="hm-education-title">
                  <h4>SERVICES / EDUCATION CONSULTANCY</h4>
                  <p>Welcome to Hemllin , your trusted partner in overseas education advisory, career coaching, and IELTS training! </p>
              </div>

              <div className="hm-education-intro custom-shape-divider-bottom-1688456518">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                    <div className="hm-education-intro__text">
                      <h3>EDUCATION CONSULTANCY</h3>
                      <p>Our mission is to empower individuals achieve their educational and career goals, providing comprehensive guidance and support throughout the entire process. With our expertise and personalized approach, we ensure that you have the best possible chance of success in your educational journey.</p>
                  </div>

                  <div className="hm-education-content">
                        <h3>Our Services include:</h3>
                        <div className="hm-education-options-container scale-up" >
                            <div className="hm-education-option__image">
                                <img src={overseas_education} alt="Education Consultancy" />
                            </div>
                            <div className="hm-education-option__content">
                                <div className="hm-education-option__content__desc">
                                    <div className='hm-edu-step-number'>
                                        <h4>Overseas Education Advisory:</h4>
                                    </div>
                                </div>
                                <div className="hm-education-option__content__list">
                                    <ul>
                                        <li>We offer expert guidance on studying abroad, assisting you in choosing the right country, university, and program that aligns with your interests, goals, and budget.</li>
                                        <li>Our experienced consultants provide thorough information about admission requirements, application procedures, and visa processes, ensuring a smooth transition to your desired destination.</li>
                                        <li>We stay up-to-date with the latest educational trends and opportunities worldwide, giving you access to a wide range of options and helping you make informed decisions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hm-education-options-container scale-up" >
                            <div className="hm-education-option__image">
                                <img src={career_coaching} alt="Career Coaching" />
                            </div>
                            <div className="hm-education-option__content">
                                <div className="hm-education-option__content__desc">
                                    <div className='hm-edu-step-number'>
                                        <h4>Career Coaching:</h4>
                                    </div>
                                </div>
                                <div className="hm-education-option__content__list">
                                    <ul>
                                        <li>Our career coaching services are designed to help you explore and identify your true potential, interests, and career aspirations.</li>
                                        <li>Our professional coaches provide one-on-one sessions to assess your skills, strengths, and weaknesses, and offer personalized guidance to help you make strategic career choices.</li>
                                        <li>We assist in developing effective resumes, preparing for interviews, and enhancing your networking and job search skills, ensuring you are well-prepared for the competitive job market.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hm-education-options-container scale-up" >
                            <div className="hm-education-option__image">
                                <img src={language_training} alt="Language Training" />
                            </div>
                            <div className="hm-education-option__content">
                                <div className="hm-education-option__content__desc">
                                    <div className='hm-edu-step-number'>
                                        <h4>Language Training :</h4>
                                    </div>
                                </div>
                                <div className="hm-education-option__content__list">
                                    <ul>
                                        <li>Our IELTS Coaching program is tailored to help you achieve your desired band score in the International English Language Testing System (IELTS) examination.</li>
                                        <li>Our experienced trainers provide comprehensive lessons, practice materials, and mock tests to improve your English language proficiency across all four sections: listening, reading, writing, and speaking.</li>
                                        <li>We focus on individual attention and provide feedback to help you identify areas of improvement, enhancing your chances of obtaining the required score for study or immigration purposes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div className='hm-education-wu'>
                    <h3>Why Us?</h3>
                    <div className='hm-education-wu__content'>
                        <div className='hm-education-wu__content__desc scale-up'>
                            <h4>Expertise and Experience</h4>
                            <p>Our team of highly knowledgeable and experienced consultants have a deep understanding of the education industry and are well-equipped to guide you through the entire process.</p>
                            <p>We have established strong partnerships with leading universities and educational institutions globally, ensuring access to top-notch educational opportunities.</p>
                        </div>
                        <div className='hm-education-wu__content__desc scale-up'>
                            <h4>Personalized Approach:</h4>
                            <p>We believe in a personalized approach to education consulting, recognizing that every individual has unique goals and requirements.</p>
                            <p>Our consultants take the time to understand your aspirations and provide customized solutions, tailoring our services to meet your specific needs.</p>
                        </div>
                        <div className='hm-education-wu__content__desc scale-up'>
                            <h4>Support at Every Step:</h4>
                            <p>From the initial consultation to post-enrollment support, we are with you at every step of your educational journey.</p>
                            <p>Our team is dedicated to providing timely assistance, answering your queries, and addressing any concerns you may have.</p>
                        </div>
                        <div className='hm-education-wu__content__desc scale-up'>
                            <h4>Success Stories:</h4>
                            <p>We take pride in the success stories of our clients who have pursued their dreams of studying abroad or excelling in their careers.</p>
                            <p>Our testimonials and case studies highlight the positive impact of our services and the transformative experiences of our clients.</p>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="hm-education-footer">
                  <h4>Contact us to schedule an appointment with one of our consultants or to learn more about our services. </h4>
                  <p>We look forward to being a part of your journey towards success.</p>
              </div>
              <div className="explore-services">
                    <h4>Explore</h4>
                    <div className="other-services-content">
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                                <img src={hr} alt="Human Resource Consulting" title="Management Consultancy" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/management'>Management Consultancy</Link></h4>
                                <article>Management consulting comprises 50 percent of the industry because it is crucial in helping businesses achieve their objectives by equipping top leadership with indispensable strategies in increasing competitive advantage. </article>
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
                              <img src={coaching_1} alt="Coaching and Training"  title="Training and Coaching" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/training-and-coaching'>Coaching and Training</Link></h4>
                                <article>We have specialized methods of training, counseling, or instructing an individual or a group on how to develop skills to enhance their productivity or overcome a performance problem.</article>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <Cta ctaTitle='Get started on your educational and career advancement today! ' ctaLink1='https://calendly.com/hemllinconsultancy/consultation?month=2023-07' ctaLink1Text='Book a Meeting'ctaLink2='/contact-us' ctaLink2Text='Contact Us'/>
          <Footer />
          <ScrollToTop />
      </>
  )
}

export default Education
import React from 'react';
import { Footer, Navbar2 } from '../../components';
import './service-pages.css';
import Cta from '../Cta';
import { Link } from 'react-router-dom';
import coaching_1 from '../../assets/coaching_1.jpg';
import travel_1 from '../../assets/travel_1.jpg';
import travel_2 from '../../assets/travel_2.jpg';
import hr from '../../assets/hr.jpg';
import education from '../../assets/education.png';

const Travel = () => {
  return (
    <>
          <Navbar2 />
          <div className="travel-container">
              <div className="hm-travel-title">
                  <h4>SERVICES / TRAVEL CONSULTANCY</h4>
                  <p>Destination Management Company | Online Travel Agency | Visitor Information Centre</p>
              </div>

              <div className="hm-travel-intro">
                  <div className="hm-travel-intro__text">
                      <h4>TRAVEL CONSULTANCY</h4>
                  </div>

                  <div className="hm-travel-content">
                        <div className="hm-travel-options-container" >
                            <div className="hm-travel-option__image">
                                <img src={travel_1} alt="Travel Consultancy" />
                            </div>
                            <div className="hm-travel-option__content">
                                <div className="hm-travel-option__content__desc">
                                    <p>Welcome to Hemllin,your trusted partner in creating unforgettable travel experiences. As a premier travel consulting firm, we specialize in providing personalized and tailored services to discerning travelers seeking expert guidance and exceptional journeys.</p>
                                    <p>At Hemllin, we understand that each traveler has unique preferences, interests, and expectations. That's why we take the time to listen and understand your desires, allowing us to curate bespoke travel experiences that surpass your wildest dreams. Our team of experienced travel consultants possesses in-depth knowledge of global destinations, insider connections, and a passion for exploration, ensuring that every aspect of your journey is meticulously planned and executed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-travel-options-container scale-up">
                            <div className="hm-travel-option__image">
                                <img src={travel_2} alt="Travel Consultancy" />
                            </div>
                            <div className="hm-travel-option__content">
                                <div className="hm-travel-option__content__desc">
                                    <p>Whether you're looking for a romantic getaway, an adventurous expedition, a luxurious retreat, or a cultural immersion, we have the expertise to turn your travel aspirations into reality. Our travel consultants are well-versed in crafting customized itineraries that encompass the finest accommodations, exclusive activities, immersive cultural encounters, and seamless logistics. We leave no stone unturned in our pursuit of creating extraordinary moments that will leave you with cherished memories. </p>
                                  <p>In addition to designing personalized travel experiences, we oer comprehensive travel consulting services. We provide expert advice on destination selection, travel trends, visa requirements, travel insurance, and more. Our consultants stay abreast of the latest developments in the travel industry, ensuring that you receive up-to-date information and guidance throughout your journey. </p>
                                  <p>What sets us apart is our unwavering commitment to customer satisfaction. We prioritize attention to detail, responsiveness, and personalized service, tailoring every aspect of your travel experience to surpass your expectations. From the moment your each out to us until you return home, we are dedicated to providing you with a seamless and stress-free travel experience</p>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div className="hm-travel-footer">
                  <h4>Embark on a journey of a lifetime with us. Let us be your trusted advisor, ensuring that every moment of your travel adventure is meticulously planned and flawlessly executed.</h4>
                  <p>Contact us today to start crafting your next unforgettable travel experience.</p>
              </div>
              <div className="explore-services">
                    <h4>Explore</h4>
                    <div className="other-services-content">
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                              <img src={education} alt="Education Consultancy" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/education'>Education Consultancy</Link></h4>
                                <article>Education consulting is intended to improve students' outcomes by increasing the accessibility and affordability of the education ecosystem. We ensure that you have the best possible chance of success in your educational journey.</article>
                            </div>
                        </div>
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                                <img src={hr} alt="Human Resource Consulting" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/management'>Management Consultancy</Link></h4>
                                <article>Management consulting comprises 50 percent of the industry because it is crucial in helping businesses achieve their objectives by equipping top leadership with indispensable strategies in increasing competitive advantage. </article>
                            </div>
                        </div>
                        <div className="other-services-content__detail scale-up">
                            <div className="other-services-image">
                              <img src={coaching_1} alt="Coaching and Training" />
                            </div>
                            <div className="other-services-text">
                                <h4><Link to='/our-services/training-and-coaching'>Coaching and Training</Link></h4>
                                <article>We have specialized methods of training, counseling, or instructing an individual or a group on how to develop skills to enhance their productivity or overcome a performance problem.</article>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          
          <Cta ctaTitle='Ready to Work with Us?' ctaLink1='/contact-us' ctaLink1Text='Contact Us'ctaLink2='/contact-us' ctaLink2Text='Contact Us'/>
          <Footer/>
      </>
  )
}

export default Travel
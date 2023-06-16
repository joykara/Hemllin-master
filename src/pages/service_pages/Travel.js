import React from 'react';
import { Footer, Navbar2 } from '../../components';
import './service-pages.css';
import Cta from '../Cta';

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
                            </div>
                            <div className="hm-travel-option__content">
                                <div className="hm-travel-option__content__desc">
                                    <div className='hm-travel-step-number'>
                                        <h3>TRAVEL CONSULTANCY</h3>
                                    </div>
                                    <p>Welcome to Hemllin,your trusted partner in creating unforgettable travel experiences. As a premier travel consulting firm, we specialize in providing personalized and tailored services to discerning travelers seeking expert guidance and exceptional journeys.</p>
                                    <p>At Hemllin, we understand that each traveler has unique preferences, interests, and expectations. That's why we take the time to listen and understand your desires, allowing us to curate bespoke travel experiences that surpass your wildest dreams. Our team of experienced travel consultants possesses in-depth knowledge of global destinations, insider connections, and a passion for exploration, ensuring that every aspect of your journey is meticulously planned and executed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-travel-options-container scale-up">
                            <div className="hm-travel-option__image">
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
          </div>
          
          <Cta ctaTitle='Ready to Work with Us?' ctaLink1='/contact-us' ctaLink1Text='Contact Us'ctaLink2='/contact-us' ctaLink2Text='Contact Us'/>
          <Footer/>
      </>
  )
}

export default Travel
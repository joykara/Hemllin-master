import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Footer, Navbar2 } from '../../components';
import coaching_1 from '../../assets/coaching_1.jpg';
import travel_1 from '../../assets/travel_1.jpg';
import overseas_education from '../../assets/education.png';
import hr from '../../assets/hr.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    useEffect(() => {
        // Track page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const trackButtonClick = () => {
        ReactGA.event({
          category: 'Services',
          action: 'Read More Button Clicked',
          label: 'Service Name',
        });
    };

  return (
      <>
          <div className="dark-container">
                <Navbar2 />
                <div className="services-container">
                    <div className="services-title">
                    <h2>OUR &nbsp; SERVICES</h2>
                    </div>
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                  <div className="services-content">
                  <div className="service-options-container scale-up">
                      <div className="service-option__image">
                          <img src={hr} alt="" title="Management Consultancy" />
                    </div>
                    <div className="service-option__content">
                        <h3>Management Consultancy</h3>
                        <p>Management consulting comprises 50 percent of the industry because it is crucial in helping businesses achieve their objectives by equipping top leadership with indispensable strategies in increasing competitive advantage. </p>

                        <p>Our services include: </p>
                        <ul className='services-included'>
                            <li>Strategy Consultancy</li>
                            <li>Operation Consultancy </li>
                            <li>Human Resource Consultancy</li>
                            <li>Market Consultancy </li>
                            <li>Financial Advisory</li>
                        </ul>
                        <button type='button' onClick={trackButtonClick}><Link to="/our-services/management">Read More</Link></button>
                    </div>
                </div>
                <div className="service-options-container scale-up">
                      <div className="service-option__image">
                            <img src={overseas_education} alt="" title="Education Consultancy"/>
                    </div>
                    <div className="service-option__content">
                        <h3>Education Consultancy</h3>
                        <p>Education consulting is intended to improve students' outcomes by increasing the accessibility and affordability of the education ecosystem. The global educational landscape has changed significantly as much as the labor market, meaning stakeholders should update their knowledge and expectations. </p>

                        <p>Our services include: </p>
                        <ul className='services-included'>
                            <li>College planning and admission</li>
                            <li>Private and secondary school admission </li>
                            <li>Foreign university admission </li>
                            <li>Course advisory</li>
                            <li>Career counseling</li>
                        </ul>
                        <button type='button' onClick={trackButtonClick}><Link to="/our-services/education">Read More</Link></button>
                    </div>
                </div>
                <div className="service-options-container scale-up">
                      <div className="service-option__image">
                          <img src={travel_1} alt="" title="Travel Consultancy" />
                    </div>
                    <div className="service-option__content">
                        <h3>Travel Consultancy</h3>
                        <p>Traveling to differing destinations for diverse reasons is an aspiration for many people. Whether for education, touring, or employment, we provide the necessary information and guidance to achieve these objectives. </p>
                        <button type='button' onClick={trackButtonClick}><Link to="/our-services/travel">Read More</Link></button>
                    </div>
                </div>
                <div className="service-options-container scale-up">
                    <div className="service-option__image">
                            <img src={coaching_1} alt="Training and Coaching"  title="Training and Coaching"/>
                    </div>
                    <div className="service-option__content">
                        <h3>Training and Coaching</h3>
                        <p>We have specialized methods of training, counseling, or instructing an individual or a group on how to develop skills to enhance their productivity or overcome a performance problem.</p>
                        <button type='button' onClick={trackButtonClick}><Link to="/our-services/training-and-coaching">Read More</Link></button>

                    </div>
                </div>
              </div>
              
                </div>
                <Footer/>
          </div>
          
      </>
  )
}

export default Services
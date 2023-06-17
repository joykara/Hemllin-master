import React from 'react'
import { Footer, Navbar2 } from '../../components'

const Services = () => {
  return (
      <>
          <Navbar2 />
          <div className="services-container">
              <div className="services-title">
                    <h2>Services</h2>
              </div>
              <div className="services-content">
                  <div className="service-options-container">
                    <div className="service-option__image">
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
                        <button type='button'><a href="/our-services/management">Read More</a></button>
                    </div>
                </div>
                <div className="service-options-container">
                    <div className="service-option__image">
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
                        <button type='button'><a href="/our-services/education">Read More</a></button>
                    </div>
                </div>
                <div className="service-options-container">
                    <div className="service-option__image">
                    </div>
                    <div className="service-option__content">
                        <h3>Travel Consultancy</h3>
                        <p>Traveling to differing destinations for diverse reasons is an aspiration for many people. Whether for education, touring, or employment, we provide the necessary information and guidance to achieve these objectives. </p>
                        <button type='button'><a href="/our-services/travel">Read More</a></button>
                    </div>
                </div>
                <div className="service-options-container">
                    <div className="service-option__image">
                    </div>
                    <div className="service-option__content">
                        <h3>Training and Coaching</h3>
                        <p>We have specialized methods of training, counseling, or instructing an individual or a group on how to develop skills to enhance their productivity or overcome a performance problem.</p>
                        <button type='button'><a href="/our-services/training-and-coaching">Read More</a></button>

                    </div>
                </div>
              </div>
              
          </div>
          <Footer/>
      </>
  )
}

export default Services
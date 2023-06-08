/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './articles.css';
import videoImage from '../../assets/514A1520 1.png'
import joinUS from '../../assets/join-us.png';
import arrow from '../../assets/arrow.png'

const Articles = () => {
  return (
    <>
      {/* <div className="articles-container">
        <div className="articles-heading">
          <h4>Lorem Ipsum</h4>
        </div>
        <div className="articles-content">
          <Article articleTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
          <Article articleTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
          <Article articleTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
          <Article articleTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
          <Article articleTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
        </div>
      </div> */}
      <div className="other-content">
        <div className="other-content__container">
          <div className="other-content__video">
            <img src={videoImage} alt="" />
          </div>
        </div>
      </div>
      <div className="career-content">
        <div className="career-content__container">
          <div className="career-content__image">
            <img src={joinUS} alt="join us" />
          </div>
          <div className="career-content__text">
            <h2>Join Hemllin</h2>
            <button type='button'><a href="" className='cta-link'>Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            <button type='button'><a href="" >Check our process <span className='arrow '><img src={arrow} alt="arrow nav" /></span></a></button>
          </div>
        </div>
      </div>
      <div className="hm-cta-container">
        <h2>Let's Make Magic Happen! How Can We Be Your Superheroes?</h2>
        <p className='hm-cta__text'><span><a href="/contact-us" className='cta-link'>Contact us</a></span> or <span><a href="" className='cta-link'>book an appointment</a></span> with us.</p>
      </div>
    </>
  )
}

export default Articles
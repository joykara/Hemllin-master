import React from 'react'
import AboutNavbar from '../components/aboutnav/AboutNavbar'
import arrow from '../assets/arrow.png';
import wwa1 from '../assets/who-are-we.png';
import hww from '../assets/how-we-work.png';
import ourValues from '../assets/our-values.png'
import './pages.css';
import { Footer } from '../components';


const About = () => {
  return (
    <>
      <AboutNavbar />
      <div className="overview-container">
        <div className="overview">
          <div className="overview-videotext">
            <p>About Us</p>
            <h2>Our story begins with a vision of transforming businesses and empowering individuals to  reach their full potential.</h2>
          </div>
        </div>

        <div className="overview-intro">
          <h3>Just like superheroes, we believe that every organisation and every individual has untapped potential and hidden strengths waiting to be unleashed.
</h3>
          <p>Our team of seasoned experts, with years of experience in various industries, brings a diverse set of superpowers to the table. From strategic planning and financial analysis to marketing strategies and technological innovations, we have the skills and knowledge to tackle any challenge that comes our way.</p>
        </div>

        <div className="overview-wwa__content">
          <div className="overview-wwa__content-text">
            <h3>Who are we?</h3>
            <p>But what truly sets us apart is our unwavering commitment to making a difference. We don't just provide cookie-cutter solutions; we dive deep into understanding your unique needs and aspirations. We believe in co-creating tailor-made strategies and solutions that align with your goals and aspirations.</p>
          </div>
          <div className="overview-wwa__content-img">
            <img src={wwa1} alt="who are we" />
          </div>
        </div>

        <div className="overview-wwa__details">
          <div className="wwa-detail">
            <h4>Our people</h4>
            <p>At the heart of our organization, it is our exceptional team members who define us, and we are fully devoted to fostering a culture that embraces diversity and inclusivity.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="/about-us/our-team" className='cta-link'>Meet our team<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
          <div className="wwa-detail">
            <h4>Purpose,mission and values</h4>
            <p>Explore the foundational principles that shape our long-term strategy and guide our commitment to serving our clients effectively.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="/about-us/our-purpose-mission-and-values">Learn more about our values<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
            <div className="wwa-detail__button">
                <button type='button'><a href="">Meet our team<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
          <div className="wwa-detail">
            <h4>Our governance </h4>
            <p>As an organization guided by strong values, we strive to uphold the utmost professional and ethical standards in all aspects of our work.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
        </div>
        <div className="overview-wwa__content2">
          <div className="overview-wwa__content-text">
            <h3>How do we work?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nam culpa alias. Iure alias, earum voluptatibus ea quis minima eum consequatur esse illo voluptas reiciendis illum rerum! Delectus, dolorem ducimus.</p>
          </div>
          <div className="overview-wwa__content-img">
            <img src={hww} alt="how do we work" />
          </div>
        </div>
        <div className="overview-wwa__content3">
          <div className="overview-wwa__content-text2">
            <h3>Our values</h3>
            <p>Our values form the bedrock of our organization, shaping every aspect of our work. We are deeply committed to fostering sustainable innovation in partnership with our clients, empowering them to embrace forward-thinking strategies that benefit both their business and the environment. Our unwavering dedication to lasting gains in performance ensures that we deliver impactful results that endure beyond short-term goals.</p>
          </div>
          <div className="overview-wwa__content-img">
            <img src={ourValues} alt="our values" />
          </div>
        </div>

        <div className="case-study">
          <h4>Case Study</h4>
          <div className="case-study-content">
            <div className="case-study-content__detail scale-up">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <span>lorem ipsum</span>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
            <div className="case-study-content__detail scale-up">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <span>lorem ipsum</span>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
          </div>
          <button type='button'><a href="">Trending insights</a></button>
        </div>
        <div className="explore">
          <h4>Explore</h4>
          <div className="case-study-content">
            <div className="case-study-content__detail scale-up">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <span>lorem ipsum</span>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
            <div className="case-study-content__detail scale-up">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
            <div className="case-study-content__detail scale-up">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

      </div>
    </>
  )
}

export default About
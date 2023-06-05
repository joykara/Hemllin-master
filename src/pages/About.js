import React from 'react'
import AboutNavbar from '../components/aboutnav/AboutNavbar'
import arrow from '../assets/arrow.png';
import './pages.css';
import { Footer } from '../components';


const About = () => {
  return (
    <>
      <AboutNavbar />
      <div className="overview-container">
        <div className="overview">
          <div className="overview-videotext">
            <p>Lorem Ipsum</p>
            <h2>Our story begins with a vision of transforming businesses and empowering individuals to  reach their full potential.</h2>
          </div>
        </div>

        <div className="overview-intro">
          <h3>Just like superheroes, we believe that every organisation and every individual has untapped potential and hidden strengths waiting to be unleashed.
</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse veritatis, enim ut possimus iste eveniet, ipsum accusantium repudiandae eos debitis quia sit tempora nobis quam provident praesentium voluptas autem.</p>
        </div>

        <div className="overview-wwa__content">
          <div className="overview-wwa__content-text">
            <h3>Who We Are</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nam culpa alias. Iure alias, earum voluptatibus ea quis minima eum consequatur esse illo voluptas reiciendis illum rerum! Delectus, dolorem ducimus.</p>
          </div>
          <div className="overview-wwa__content-img"></div>
        </div>

        <div className="overview-wwa__details">
          <div className="wwa-detail">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit rem perspiciatis quo aliquam eligendi consectetur.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
          <div className="wwa-detail">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit rem perspiciatis quo aliquam eligendi consectetur.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
          <div className="wwa-detail">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit rem perspiciatis quo aliquam eligendi consectetur.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
        </div>
        <div className="overview-wwa__content2">
          <div className="overview-wwa__content-text">
            <h3>Who We Are</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nam culpa alias. Iure alias, earum voluptatibus ea quis minima eum consequatur esse illo voluptas reiciendis illum rerum! Delectus, dolorem ducimus.</p>
          </div>
          <div className="overview-wwa__content-img"></div>
        </div>
        <div className="overview-wwa__details">
          <div className="wwa-detail">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit rem perspiciatis quo aliquam eligendi consectetur.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
          <div className="wwa-detail">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit rem perspiciatis quo aliquam eligendi consectetur.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
          <div className="wwa-detail">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit rem perspiciatis quo aliquam eligendi consectetur.</p>

            <div className="wwa-detail__button">
                <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            </div>
          </div>
        </div>

        <div className="case-study">
          <h4>Case Study</h4>
          <div className="case-study-content">
            <div className="case-study-content__detail">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <span>lorem ipsum</span>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
            <div className="case-study-content__detail">
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
            <div className="case-study-content__detail">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <span>lorem ipsum</span>
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
            <div className="case-study-content__detail">
              <div className="case-study-image"></div>
              <div className="case-study-text">
                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam neque itaque ea asperi</article>
              </div>
            </div>
            <div className="case-study-content__detail">
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
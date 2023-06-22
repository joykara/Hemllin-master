/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';
import '../../container/highlight/highlight.css';
import Highlight from '../../container/highlight/Highlight';  // import Highlight container
import heroImage from '../../assets/heroImage.png';
import arrow from '../../assets/arrow.png'
import {RiCloseLine} from 'react-icons/ri'

const Header = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
        delay: 1000,
    });
}, []
); //onscroll animation
  const [hemllinVisible, setHemllinVisible] = useState(true);

  const handleCloseClick = () => {
    setHemllinVisible(false);
  };

  useEffect(() => {
    const container = document.getElementById('curved-lines-container');
    const totalLines = 40;
    const angleIncrement = 70 / totalLines;

    for (let i = 0; i < totalLines; i++) {
      const line = document.createElement('div');
      line.classList.add('curved-lines');
      line.style.animationDuration = `${1 + i * 0.5}s`;
      line.style.animationDelay = `${i * 0.02}s`;
      line.style.transform = `rotate(-${10 + angleIncrement * i}deg) translateY(24000%)`;
      container.appendChild(line);
    }
  }, []);

return (
  <>
    <div className="header-container">
      {/* <video autoPlay='autoplay' id="myVideo">
        <source src={hemllinVideo} type="video/mp4"/>
      </video> */}
      <div id="curved-lines-container"></div>
      <div className='header'>
        <div className="header-image">
          <img src={heroImage} alt="hero" />
        </div>

        <div className="header-content">
          <h1>Welcome to <span>Hemllin</span>, where Heroes are made!</h1>
          <p>
            Our story begins with a vision of transforming businesses and empowering individuals to reach their full potential. Just like superheroes, we believe that every organisation and every individual has untapped potential and hidden strengths waiting to be unleashed.
          </p>

          <div className="header-content__button">
            <button type='button'><a href="">Trending insights<span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
          </div>
        </div>
      </div>
      {hemllinVisible && (
      <section class="hemllin whatsnew" data-aos='slide-left'>
        <div class="say-hello">
          <a class="close" onClick={handleCloseClick}>
            <span aria-hidden="true"><RiCloseLine/></span>
          </a>
          <a title="Hemllin" href="https://api.whatsapp.com/send/?phone=254705080821&amp;text=%5BKE%5D+Hi+Hemllin&amp;app_absent=0" target="_blank" rel="nofollow noopener noreferrer">Hi welcome to Hemllin , how can I help you today?</a>
        </div>
        <a id='image-title' title="modal" href="https://api.whatsapp.com/send/?phone=254705080821&amp;text=%5BKE%5D+Hi+Zuri&amp;app_absent=0" target="_blank" rel="nofollow noopener noreferrer">
          <img src={heroImage} alt="Safaricom Neo"/>
        </a>
      </section>

      )}
      <div className="header__highlight-bar">
          <h2 className="highlight-bar__heading">CURRENT INSIGHTS</h2>
        <div className="highlight-bar__container">
          <ul>
          <Highlight number='1' labelLink='' label='AI and Digitization for improved business performance.'/>
            <Highlight number='2' labelLink='' label='Global recruitment for specialist positions.'/>
            <Highlight number='3' labelLink='' label='Revamped retention strategies.'/>
            <Highlight number='4' labelLink='' label='Compliance with Environmental, Social and Governance (ESG) measures.'/>
          </ul>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Header
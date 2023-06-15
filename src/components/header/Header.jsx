/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
// import {BsArrowRight} from 'react-icons/bs';
import './header.css';
import '../../container/highlight/highlight.css';
import Highlight from '../../container/highlight/Highlight';  // import Highlight container
import heroImage from '../../assets/heroImage.png';
import arrow from '../../assets/arrow.png'
// import hemllinVideo from '../../assets/hemllin4.mp4'

const Header = () => {
  useEffect(() => {
  const container = document.getElementById('curved-lines-container');
  const totalLines = 35;
  const angleIncrement = 75 / totalLines;

  for (let i = 0; i < totalLines; i++) {
    const line = document.createElement('div');
    line.classList.add('curved-lines');
    line.style.animationDelay = `${i * 0.02}s`;
    line.style.transform = `rotate(-${25 + angleIncrement * i}deg) translateY(24000%)`;
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

      <div className="header__highlight-bar">
          <h2 className="highlight-bar__heading">Current Insights</h2>
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
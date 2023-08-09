/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react';
import './articles.css';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import videoImage from '../../assets/RCS-video.mp4'
import joinUS from '../../assets/join-us.png';
import arrow from '../../assets/arrow.png'

const Articles = () => {
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    const handleToggleMute = () => {
      setMuted(!muted);
      videoRef.current.muted = !muted;
    };

  return (
    <>
      <div className="other-content">
        <div className="other-content__container">
          <div className="other-content__video">
            <video ref={videoRef} autoPlay loop muted={muted}>
              <source src={videoImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={handleToggleMute}>
              {muted ? <FaMicrophoneSlash color='white' size={25}/> : <FaMicrophone color='white' size={20}/>}
            </button>
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
            <button type='button'><a href="/careers" className='cta-link'>Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
            <button type='button'><a href="/about-us/how-we-work" className='cta-link'>Check our process <span className='arrow '><img src={arrow} alt="arrow nav" /></span></a></button>
          </div>
        </div>
      </div>
      <div className="hm-cta-container">
        <h2>Let's Make Magic Happen! How Can We Be Your Superheroes?</h2>
        <p className='hm-cta__text'><span><a href="/contact-us" className='cta-link'>Contact us</a></span> or <span><a href="https://calendly.com/hemllinconsultancy/consultation?month=2023-07" className='cta-link'>book an appointment</a></span> with us.</p>
      </div>
    </>
  )
}

export default Articles
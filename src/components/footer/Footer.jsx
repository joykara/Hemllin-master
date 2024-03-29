import React, { useState } from 'react';
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';
import axios from 'axios';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../hemllinLogo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  // handle input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // handle subscription submission
  const handleSubscriptionSubmit = (event) => {
    event.preventDefault();

    // Send the email subscription to the server
    axios
      .post('/subscriptions', { email })
      .then((response) => {
        console.log(response.data);
        // Clear the email input after successful submission
        setEmail('');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="hm-footer-container">
        <div className="hm-footer">
              <div className="navbar-hm__logo">
                <Link to="/"><img src={logo} alt="" /></Link>
              </div>
              <div className="hm-footer-content">
                  <div className="hm-email">
                      <h3>Subscribe</h3>
                      <p>Want to get the latest market trends?</p>
                      <div className="hm-email-input">
                        <input type="email" name='email' placeholder="Email address" autoComplete='off' aria-invalid='false' value={email} onChange={handleEmailChange}/>
                        <button aria-label='submit for email alerts' type='submit' onClick={handleSubscriptionSubmit}>Subscribe</button>
                      </div>
                  </div>
                  <div className="hm-footer-links">
                      <ul className='hm-footer-cta-links'>
                          <li><a href="/contact-us">Contact Us</a></li>
                          <li><a href="/">FAQ</a></li>
                          <li><a href="/">Privacy policy</a></li>
                          <li><a href="/">Terms of Use</a></li>
                      </ul>
                      <ul className='hm-footer-cta-social-links'>
                          <li><Link to="https://www.linkedin.com/company/hemllin/?viewAsMember=true"><RiLinkedinFill size={25}/></Link></li>
                          <li><Link to="https://twitter.com/hemllin" target="_blank" rel="noopener noreferrer"><RiTwitterFill size={25}/></Link></li>
                          <li><Link to="https://www.instagram.com/hemllin/" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={25}/></Link></li>
                          <li><Link to="http://facebook.com/hemllin/" target="_blank" rel="noopener noreferrer"><RiFacebookCircleFill size={25}/></Link></li>
                          <li><Link to="https://www.youtube.com/@hemllin/featured" target="_blank" rel="noopener noreferrer"><RiYoutubeFill size={25}/></Link></li>
                        </ul>
                  </div>

              </div>
              <div className="hm-footer__copyright">
                  <p>Hemllin - Get our latest thinking on your devices</p>
                  <p>©2017-2023 Hemllin</p>
              </div>
        </div>
    </div>
  )
}

export default Footer
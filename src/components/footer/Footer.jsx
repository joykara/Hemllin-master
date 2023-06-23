/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill } from 'react-icons/ri';
import './footer.css'

const Footer = () => {
  return (
    <div className="hm-footer-container">
        <div className="hm-footer">
              <div className="hm-logo">Logo</div>
              <div className="hm-footer-content">
                  <div className="hm-email">
                      <h3>Subscribe</h3>
                      <p>Want to get the latest market trends?</p>
                      <div className="hm-email-input">
                        <input type="email" name='email' placeholder="Email address" autoComplete='off' aria-invalid='false'/>
                        <button aria-label='submit for email alerts' type='submit' >Subscribe</button>
                      </div>
                  </div>
                  <div className="hm-footer-links">
                      <ul className='hm-footer-cta-links'>
                          <li><a href="/contact-us">Contact Us</a></li>
                          <li><a href="">FAQ</a></li>
                          <li><a href="">Privacy policy</a></li>
                          <li><a href="">Terms of Use</a></li>
                      </ul>
                      <ul className='hm-footer-cta-social-links'>
                          <li><a href=""><RiLinkedinFill size={25}/></a></li>
                          <li><a href=""><RiTwitterFill size={25}/></a></li>
                          <li><a href=""><RiFacebookCircleFill size={25}/></a></li>
                          <li><a href=""><RiYoutubeFill size={25}/></a></li>
                        </ul>
                  </div>

              </div>
              <div className="hm-footer__copyright">
                  <p>©2017-2023 Hemllin consultancy</p>
              </div>
        </div>
    </div>
  )
}

export default Footer
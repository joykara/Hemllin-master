import React, {useEffect} from 'react';
import './mobile_dropdown.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MobileServicesMenu = () => {
    useEffect(() => {
      AOS.init({
          duration: 1000,
          delay: 0,
      });
  }, []
  ); //onscroll animation
  return (
    <>
            <div className="mb-services-list" data-aos='slide-left'>
                <h3>Our Services</h3>
                <ul>
                    <li className='mb-services-dropdown-item'>
                        <a href='/our-services/management'>Management Consultancy</a>
                    </li>
                    <li className='mb-services-dropdown-item'>
                        <a href='/our-services/education'>Education Consultancy</a>
                    </li>
                    <li className='mb-services-dropdown-item'>
                        <a href='/our-services/travel'>Travel Consultancy</a>
                    </li>
                    <li className='mb-services-dropdown-item'>
                        <a href='/our-services/training-and-coaching'>Coaching and Training</a>
                    </li>
                </ul>
            </div>

        </>
  )
}

export default MobileServicesMenu
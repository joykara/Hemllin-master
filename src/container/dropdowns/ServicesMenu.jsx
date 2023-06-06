import React from 'react';
import './dropdownmenu.css';

const ServicesMenu = () => {
    return (
        <>
        <ul className='services-list'>
          <li className='services-dropdown-item'>
              <a href='/services/management'>Management</a>
          </li>
          <li className='services-dropdown-item'>
              <a href='/services/education'>Education</a>
          </li>
          <li className='services-dropdown-item'>
              <a href='/services/travel'>Travel</a>
          </li>
          <li className='services-dropdown-item'>
              <a href='/services/coaching'>Coaching</a>
          </li>
          <li className='services-dropdown-item'>
              <a href='/services/events-management'>Events Management</a>
          </li>
        </ul>
        </>
    )
}

export default ServicesMenu
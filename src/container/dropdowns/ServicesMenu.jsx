import React from 'react';
import './dropdownmenu.css';

const ServicesMenu = () => {
    return (
        <>
            <div className="services-list">
                <h3>Our Services</h3>
                <ul>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/management'>Management Consultancy</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/education'>Education Consultancy</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/travel'>Travel Consultancy</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/training-and-coaching'>Coaching and Training</a>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default ServicesMenu
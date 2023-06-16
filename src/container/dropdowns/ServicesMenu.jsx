import React from 'react';
import './dropdownmenu.css';

const ServicesMenu = () => {
    return (
        <>
            <div className="services-list">
                <h3>Our Services</h3>
                <ul>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/management'>Management</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/education'>Education</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/travel'>Travel</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/training-and-coaching'>Coaching</a>
                    </li>
                    <li className='services-dropdown-item'>
                        <a href='/our-services/events-management'>Events Management</a>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default ServicesMenu
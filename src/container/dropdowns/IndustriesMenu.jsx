import React from 'react';
import './dropdownmenu.css';

const IndustriesMenu = () => {
  return (
      <>
        <div className="industries-list">
            <h3>Industries</h3>
            <ul>
                <li className='industries-dropdown-item'>
                    <a href='/industries/agriculture'>Agriculture</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/automotive'>Automotive</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/education'>Education</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/engineering-and-construction'>Engineering and Construction</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/financial'>Financial</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/healthcare'>Healthcare</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/life-sciences'>Life Sciences</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/public-and-social'>Public and Social</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/real-estate'>Real Estate</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/retail'>Retail</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/technology-media-and-telecommunication'>Technology, Media & Telecommunications</a>
                </li>
                <li className='industries-dropdown-item'>
                    <a href='/industries/travel-logistics-and-infrastructure'>Travel, Logistics & Infrastructure</a>
                </li>
            </ul>
        </div>
      </>
  )
}
export default IndustriesMenu
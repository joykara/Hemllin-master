import React from 'react'

const AboutUs = ({linkItem, linkUrl}) => {
  return (
    <>
        <li className='about-dropdown-item'>
            <a href={linkUrl}>{linkItem}</a>
        </li>
    </>
  )
}

export default AboutUs
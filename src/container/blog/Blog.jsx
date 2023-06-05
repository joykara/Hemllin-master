import React from 'react';
import './blog.css'
import arrow from '../../assets/arrow.png'

const Blog = ({imageUrl, featureTitle, featureUrl1, featureUrl2, featureCta1, featureCta2, featureText}) => {
  return (
    <div className='blog'>
      <div className="blog-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="blog-content">
        <div className="blog-content__text">
          <h1>{featureTitle}</h1>
          <p>{featureText}</p>
            <div className="blog-content__button">
              <button type='button'><a href={featureUrl1}>{featureCta1} <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a> </button>
              <button type='button'><a href={featureUrl2}>{featureCta2} <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a> </button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Blog
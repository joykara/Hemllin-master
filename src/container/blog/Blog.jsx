import React from 'react';
import './blog.css'
import arrow from '../../assets/arrow.png';
// use lazy load for images
import LazyLoad from 'react-lazy-load';

const Blog = ({imageUrl, featureTitle, featureUrl1, featureUrl2, featureCta1, featureCta2, featureText}) => {
  return (
    <div className='blog'>
      <div className="blog-image">
        <LazyLoad height={'100%'} offset={300}>
          <img src={imageUrl} alt="Our services" />
        </LazyLoad>
      </div>
      <div className="blog-content">
        <div className="blog-content__text">
          <h1>{featureTitle}</h1>
          <p>{featureText}</p>
            <div className="blog-content__button">
              <button type='button'><a href={featureUrl1} className='cta-link'>{featureCta1} <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a> </button>
              <button type='button'><a href={featureUrl2} className='cta-link'>{featureCta2} <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a> </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
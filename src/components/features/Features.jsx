import React from 'react';
import './features.css';
import Blog from '../../container/blog/Blog';
import hourglass from '../../assets/hourglass.png'
import education from '../../assets/education.png'
import training from '../../assets/trainingAndCoaching.png'


const Features = () => {
  return (
    <div className='features-container'>
      <Blog
        imageUrl={hourglass}
        featureTitle="Navigating the Winds of Change: Strategies for Successful Organisational Transformation"
        featureUrl1='' featureUrl2=''
        featureCta1='Achieve successful organisational transformation' featureCta2='Management consultancy'
        featureText="In today's fast-paced and ever-evolving business landscape, organisations must be prepared to adapt, evolve, and embrace change to stay competitive. However, managing organisational transformation is no easy feat." />

      <Blog
        imageUrl={education}
        featureTitle="Preparing Students for the Future: The Power of Holistic Education"
        featureUrl1='' featureUrl2=''
        featureCta1='Embrace holistic education' featureCta2='Education consultancy'
        featureText="In an era of rapid technological advancements and global connectivity, the role of education has evolved beyond traditional knowledge acquisition. Today, educators and parents are recognizing the importance of holistic education in preparing students for the challenges and opportunities of the future" />

      <Blog
        imageUrl={training}
        featureTitle="Unlocking Potential: The Art of Effective Coaching and Training"
        featureUrl1='' featureUrl2=''
        featureCta1='Unlock your potential' featureCta2='Coaching and training'
        featureText="Coaching and training play a vital role in empowering individuals and organizations to reach their full potential. Whether it's personal development, skill enhancement, or professional growth, the art of effective coaching and training can make a significant difference." />
    </div>

  )
}

export default Features
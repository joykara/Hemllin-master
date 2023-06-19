import React, {useEffect} from 'react';
import './mobile_dropdown.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MobileInsightsMenu = () => {
    useEffect(() => {
      AOS.init({
          duration: 100,
          delay: 0,
      });
  }, []
  ); //onscroll animation
  return (
    <>
        <div className="mb-featured-insights-list" data-aos='slide-left'>
                <h3>Featured Insights</h3>
                <p><strong> TRENDING TOPICS</strong></p>
            <ul>
                <li className='mb-featured-insights-dropdown-item'>
                    <a href='/featured-insights/ai'>Artificial Intelligence</a>
                </li>
                <li className='mb-featured-insights-dropdown-item'>
                    <a href='/featured-insights/cloud-capabilities'>Cloud Capabilities</a>
                </li>
                <li className='mb-featured-insights-dropdown-item'>
                    <a href='/featured-insights/global-recruitment'>Global Recruitment</a>
                </li>
                <li className='mb-featured-insights-dropdown-item'>
                    <a href='/featured-insights/retention/strategies'>Retention Strategies</a>
                </li>
                <li className='mb-featured-insights-dropdown-item'>
                    <a href='/featured-insights/ESG-measures'>ESG Measures</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default MobileInsightsMenu
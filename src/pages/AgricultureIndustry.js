import React, { useEffect } from 'react';
import { IndustriesNavbar } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AgricultureIndustry = () => {
    useEffect(() => {
            AOS.init({
                duration: 3000
            });
        }, []
    ); //onscroll animation

  return (
    <>
        <div className='hm-agriculture-industry-container'>
            <IndustriesNavbar/>
            <div className='hm-agriculture-industry__banner hidden' data-aos='zoom-in'>
                <div className='hm-agriculture-industry__banner-title'>
                    <h4>LOREM IPSUM</h4>
                </div>

            </div>
            <div className='hm-agriculture-industry__content'>
                <div className='hm-agriculture-industry__content-intro hidden' data-aos='zoom-in'>
                    <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                    <div className='hm-agriculture-industry__content-intro-image'>
                    </div>
                </div>

                <div className='hm-agriculture-industry__themes hidden'>
                    <div className='hm-agriculture-industry__themes-title'>
                        <h4>LOREM IPSUM</h4>
                    </div>
                    <div className='hm-agriculture-industry__themes-content' data-aos='zoom-in'>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <h4>lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <h4>lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <h4>lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <h4>lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <h4>lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <div className='hm-agriculture-theme-components' id='content-wrapper'>

                </div>

            </div>    
        </div>
    </>
  )
}

export default AgricultureIndustry
import React, { useEffect } from 'react';
import { IndustriesNavbar } from '../../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConstructionIndustry = () => {
    useEffect(() => {
            AOS.init({
                duration: 3000,
                delay: 1000,
            });
        }, []
    ); //onscroll animation

    return (
        <>
            <IndustriesNavbar/>
            <div className='hm-agriculture-industry-container'>
                <div className='hm-agriculture-industry__banner hidden' data-aos='fade-up'>
                    <div className='hm-agriculture-industry__banner-title'>
                        <h4>LOREM IPSUM</h4>
                    </div>
    
                </div>
                <div className='hm-agriculture-industry__content'>
                    <div className='hm-agriculture-industry__content-intro hidden' data-aos='fade-up'>
                        <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                        <div className='hm-agriculture-industry__content-intro-image'>
                        </div>
                    </div>
    
                    <div className='hm-agriculture-industry__themes hidden' data-aos='fade-up'>
                        <div className='hm-agriculture-industry__themes-title'>
                            <h4>LOREM IPSUM</h4>
                        </div>
                        <div className='hm-agriculture-industry__themes-content'>
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

export default ConstructionIndustry
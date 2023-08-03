import React, { useEffect } from 'react';
import { IndustriesNavbar } from '../../components';
import './industry-pages.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import agri_1 from '../../assets/ind images/Agriculture Patterns.jpg';

const AgricultureIndustry = () => {
    useEffect(() => {
            AOS.init({
                duration: 3000,
                delay: 500,
            });
        }, []
    ); //onscroll animation

  return (
    <>
        <IndustriesNavbar/>
        <div className='hm-agriculture-industry-container'>
            <div className='hm-agriculture-industry__banner hidden' data-aos='fade-up'>
                <div className='hm-agriculture-industry__banner-image'>
                    <img src={agri_1} alt="" />
                </div>
            </div>

            <div className='hm-agriculture-industry__content'>
                <div className='hm-agriculture-industry__content-intro hidden' data-aos='fade-up'>
                    <h1>HOT TRENDS IN AGRICULTURE FOR 2023</h1>
                    <div className='hm-agriculture-industry__content-intro-image'>
                    </div>
                </div>

                <div className='hm-agriculture-industry__themes hidden' data-aos='fade-up'>
                    <div className='hm-agriculture-industry__themes-title'>
                        <h2>Artificial Intelligence in Agriculture</h2>
                    </div>
                    <div className='hm-agriculture-industry__themes-content'>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <p>From measuring soil nutrient levels to monitoring disease and insect pressure and irrigation requirements, artificial technology is starting to make in roads into agriculture. According to BI Intelligence Research, <em>“AI and machine learning is projected to triple in revenue by 2025, reaching $15.3 Billion.”</em> </p>
                            <p>The Food and Agriculture Organization estimates that by 2050, we will need to produce 60% more food to meet population expectations.Geopolitical policy, world events, supply chain issues, and weather-related events continue to place additional stress on the agricultural industry. The good news is that AI may be able to help close the gap. According to this Forbes article, <em>“artificial intelligence and machine learning are already showing the potential to help close the gap in anticipated food needs for an additional 2 billion people worldwide by 2050."</em></p>
                        </div>
                    </div>
                </div>
                <div className='hm-agriculture-industry__themes hidden' data-aos='fade-up'>
                    <div className='hm-agriculture-industry__themes-title'>
                        <h2>Regenerative Agriculture</h2>
                    </div>
                    <div className='hm-agriculture-industry__themes-content'>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <p>Regenerative agriculture describes farming and grazing practices that focus on regenerating topsoil, allowing farmers to maintain crop yields, improve water retention and plant uptake, increase farm profitability, and support bio sequestration, among other benefits.</p>
                            <p>The backbone of regenerative agriculture is a focus on strengthening the health and vitality of farm soil.</p>
                            <p>While it's not an old topic, the soil health trend has been giving regenerative agriculture a push to the limelight. Regenerative agriculture became increasingly a hot topic when General Mills pledge $2M to the “Nature Conservancy, Soil Health Institute, and Soil Health Partnership to support the development of tools and resources for farmers, landowners, and supply chain leaders to achieve widespread adoption of soil health practices.” But, their big goal is to advance regenerative agriculture on one million acres by 2030.</p>
                        </div>
                    </div>
                </div>
                <div className='hm-agriculture-industry__themes hidden' data-aos='fade-up'>
                    <div className='hm-agriculture-industry__themes-title'>
                        <h2>Precision Agriculture</h2>
                    </div>
                    <div className='hm-agriculture-industry__themes-content'>
                        <div className='hm-agriculture-industry__themes-content-text'>
                            <p>To do its job, precision agriculture relies upon specialized equipment, software and IT services. This includes accessing <span>real-time</span> data about the conditions of the crops, soil and ambient air, along with other relevant information such as hyper local weather predictions, labor costs and equipment availability.</p>
                            <p>The real-time data is collected via sensors in fields that measure the moisture content and temperature of the soil and surrounding air. Satellites and robotic <span>drones</span> can also provide farmers with real-time images of individual plants.</p>
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
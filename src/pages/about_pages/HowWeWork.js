import React from 'react';
import { Footer, AboutNavbar } from '../../components';
import arrow from '../../assets/Vector.png';
import ourHistory from '../../assets/history.png';
import ourPurpose from '../../assets/how-we-work.png'
import './about-pages.css'
import { Link } from 'react-router-dom';

const HowWeWork = () => {
  return (
    <>
        <AboutNavbar/>
        <div className="hm-hww-container">

            <a id='back' href="/about-us"><span className='arrow links-font'><img src={arrow} alt="arrow nav" />Back to About Us Overview</span></a>

            <div className='hww-content-title'>
                <h2>How We Work</h2>
            </div>

            <div className="hm-hww-content">
                <div className="hww-content-intro">
                    <p className='links-font'>At Hemllin, we follow a proven and strategic process to guide our clients towards achieving their goals and unlocking their full potential. Our process combines industry expertise, data-driven insights, and collaborative engagement to deliver impactful solutions. Here's a glimpse into how we work:</p>
                </div>
                <ul className="hww-content-details">
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>01</span>
                        <div className='hww-detail-text'>
                            <h3>Discovery and Assessment:</h3>
                            <p>We begin by immersing ourselves in your business. We conduct in-depth discovery sessions, where we listen attentively, ask probing questions, and analyse your organisation's challenges, opportunities, and goals. Through comprehensive assessments, we gain a holistic understanding of your unique context, competitive landscape, and industry trends, setting the stage for success.</p>
                        </div>
                    </li>
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>02</span>
                        <div className='hww-detail-text'>
                            <h3>Data Analysis and Insights:</h3>
                            <p>To help our clients understand their unique needs and aspirations, push the boundaries, challenge the status quo, and strive for greatness in everything they do.</p>
                        </div>
                    </li>
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>03</span>
                        <div className='hww-detail-text'>
                            <h3>Strategy and Planning:</h3>
                            <p>
                                We are relentless in our pursuit of quality. From meticulous research to flawless execution, our dedicated team strives for excellence at every stage. With an unwavering commitment to delivering top-notch services, we exceed your expectations.
                            </p>
                        </div>
                    </li>
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>04</span>
                        <div className='hww-detail-text'>
                            <h3>Solution Design and Development:</h3>
                            <p>
                                With the strategy in place, we move into action. Our experienced consultants work alongside your team to design and develop customized solutions that address your challenges head-on. Whether it's streamlining processes, implementing new technologies, or optimizing your business model, we leverage our deep expertise to design practical, sustainable, and future-ready solutions.
                            </p>
                        </div>
                    </li>
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>05</span>
                        <div className='hww-detail-text'>
                            <h3>Implementation and Execution:</h3>
                            <p>
                                We believe that execution is as crucial as strategy. Our consultants roll up their sleeves and work hand in hand with your team to ensure a smooth and successful implementation of the recommended solutions. We provide guidance, project management, and change management support,ensuring that the transition is seamless and your organisation is equipped to realize the intended outcomes.
                            </p>
                        </div>
                    </li>
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>06</span>
                        <div className='hww-detail-text'>
                            <h3>Monitoring and Evaluation:</h3>
                            <p>
                                Our commitment to success doesn't end with implementation. We monitor the progress and impact of our solutions, collecting feedback and measuring key performance indicators to assess their effectiveness. We remain agile, making adjustments as needed to drive continuous improvement and optimize results. We believe in fostering long-term partnerships, and our ongoing support ensures sustained success for your organisation.
                            </p>
                        </div>
                    </li>
                    <li className="hww-content-detail">
                        <span className='hww-detail01'>07</span>
                        <div className='hww-detail-text'>
                            <h3>Knowledge Transfer and Empowerment:</h3>
                            <p>
                            We are dedicated to empowering your team with the knowledge and skills needed for sustainable success. Through training programs, workshops, and knowledge transfer sessions, we equip your team with the tools and capabilities to maintain and build upon the achievements made. We strive to leave a lasting impact, transforming your organisation from within.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="hww-footer-content">
                <p>Partner with Hemllin today and let us guide you on the path to success. Together, we will navigate challenges, seize opportunities, and unlock your organisation's true potential. Contact us to embark on a transformative journey today</p>
            </div>
            <div className="hww-other-content">
                <div className="hww-other-content__details">
                    <h4>RELATED</h4>
                    <div className='hww-other-content-link__container'>
                        <div className="hww-other-content-link scale-up">
                            <div className='hww-other--link-image'>
                                <img src={ourHistory} alt="our history" />
                            </div>
                            <div className='hww-other--link-text'>
                                <h2><Link to='/about-us/history-of-our-firm'>Our History</Link></h2>
                                <p>Learn more about our journey and how we got to where we are today.</p>
                            </div>
                        </div>
                        <div className="hww-other-content-link scale-up">
                            <div className='hww-other--link-image'>
                                <img src={ourPurpose} alt="our history" />
                            </div>
                            <div className='hww-other--link-text'>
                                <h2><Link to='/about-us/history-of-our-firm'>Our Purpose, Mission and Values</Link></h2>
                                <p>Learn more about our journey and how we got to where we are today.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default HowWeWork
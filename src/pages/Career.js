import React from 'react'
import { Footer, AboutNavbar } from '../components';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FcCollaboration } from 'react-icons/fc';
import { SiFuturelearn } from 'react-icons/si';
import { MdDiversity3, MdWork } from 'react-icons/md';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';

const Career = () => {
  return (
    <>
        <AboutNavbar/>
        <div className='hm-careers-container'>
            <div className='hm-careers-title'>
              <h2>Ready to Revolutionize Consulting?<br/>Join Our Team and Lead the Way!</h2>
            </div>

            <div className='hm-careers-intro'>
              <div className="hm-careers-intro__about">
                  <div className="hm-career-about-title">
                      <h2><span>Working at Hemllin</span></h2>
                  </div>
                  <div className="hm-careers-about-text">
                          <p>At Hemllin, we believe that our success lies in the collective talents, expertise, and passion of our team members<br />We are always on the look out for exceptional individuals who can contribute to our dynamic and innovative consulting firm.</p>
                          <p>Join us and embark on a journey where your skills will be honed, your ideas will be valued, and your career will thrive</p>
                  </div>
              </div>

              <div className='hm-careers-intro__text'>
                <h3>Why Choose Hemllin?</h3>
              </div>

              <div className='hm-careers-intro__benefits'>
                <ul className='hm-career-benefits'>
                    <li className='benefit-tile'>
                        <div className='benefit-tile__image'>
                            <AiOutlineFundProjectionScreen size={45}/>
                        </div>
                        <h4>Meaningful Impact:</h4>
                        <div className='benefit-tile__text'>
                          <p>At Hemllin, our work is centred around making a tangible impact on our clients' businesses and the industries they operate in. As a consultant with us, you will have the opportunity to work on challenging projects, solve complex problems, and deliver strategic solutions that shape the future of our clients' organisations.</p>
                        </div>
                    </li>
                    <li className='benefit-tile'>
                        <div className='benefit-tile__image'>
                            <FaUserFriends size={45}/>
                        </div>
                        <h4>Collaborative Environment:</h4>
                        <div className='benefit-tile__text'>
                          <p>We foster a collaborative and inclusive work environment where teamwork and mutual respect are key. Our consultants come from diverse backgrounds, bringing together a wealth of experiences, perspectives, and skills. You'll be part of a supportive community that encourages knowledge sharing, professional growth, and personal development.</p>
                        </div>
                    </li>
                    <li className='benefit-tile'>
                        <div className='benefit-tile__image'>
                            <SiFuturelearn size={45}/>
                        </div>
                        <h4>Continuous Learning:</h4>
                        <div className='benefit-tile__text'>
                          <p>We are committed to the ongoing growth and development of our consultants. You will have access to comprehensive training programs, mentoring opportunities, and industry-leading resources to enhance your skills and stay ahead in a rapidly evolving business landscape. We believe in investing in our people and providing them with the tools they need to succeed.</p>
                        </div>
                    </li>
                    <li className='benefit-tile'>
                        <div className='benefit-tile__image'>
                            <MdDiversity3 size={45}/>
                        </div>
                        <h4>Client Exposure:</h4>
                        <div className='benefit-tile__text'>
                          <p>Working at Hemllin will give you the chance to collaborate with renowned clients from various industries. You'll gain invaluable exposure to diverse business challenges and develop a deep understanding of different sectors, positioning yourself as a trusted advisor and thought leader.
</p>
                        </div>
                    </li>
                    <li className='benefit-tile'>
                        <div className='benefit-tile__image'>
                            <MdWork size={45}/>
                        </div>
                        <h4>Work-Life Balance:</h4>
                        <div className='benefit-tile__text'>
                          <p>We recognize the importance of maintaining a healthy work-life balance. While we are committed to delivering exceptional results for our clients, we also value your well-being and encourage you to prioritize self-care. We offer flexible work arrangements and provide a supportive culture that promotes both personal and professional fulfillment.</p>
                        </div>
                    </li>
                    <li className='benefit-tile'>
                        <div className='benefit-tile__image'>
                            <IoAnalyticsOutline size={45}/>
                        </div>
                        <h4>Innovation and Technology:</h4>
                        <div className='benefit-tile__text'>
                          <p>At Hemllin, we embrace innovation and leverage cutting-edge technologies to drive impactful solutions. You'll have the opportunity to work with advanced analytics, and emerging technologies, allowing you to stay at the forefront of industry trends and drive innovation in your projects.</p>
                        </div>
                    </li>
                </ul>
              </div>

              <div className='hm-careers-intro__content'>
                <div className='hm-careers-intro__content-title'>
                  <div className='hm-careers-intro__content-image'>
                  </div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque qt totam iure non perspiciatis pariatur sed voluptatem praesentium ut expedita quia sit deserunt aspernatur At officiis facere. </p>
                </div>

                <div className='hm-careers-intro__content-text'>
                  <div className='image-details'>
                  </div>
                  <div className='image-details'>
                  </div>
                  <div className='image-details'>
                  </div>
                  <div className='image-details'>
                  </div>
                </div>
              </div>
              <div className='hm-careers-intro__content'>
                <div className='hm-careers-intro__content-title'>
                  <div className='hm-careers-intro__content-image'>
                  </div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque qt totam iure non perspiciatis pariatur sed voluptatem praesentium ut expedita quia sit deserunt aspernatur At officiis facere. </p>
                </div>

                <div className='hm-careers-intro__content-text'>
                  <div className='image-details'>
                  </div>
                  <div className='image-details'>
                  </div>
                  <div className='image-details'>
                  </div>
                  <div className='image-details'>
                  </div>
                </div>
              </div>
            </div>

            <div className='hm-careers-intro__other-content'>
              <div className='hm-careers-intro__content-title'>
                <h2>Lorem Ipsum</h2>
              </div>
              <div className='hm-careers-intro__other-content-text'>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
              </div>
            </div>

            <div className='hm-careers-intro__other-content'>
              <div className='hm-careers-intro__content-title'>
                <h2>Lorem Ipsum</h2>
              </div>
              <div className='hm-careers-intro__other-content-text'>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-careers-content-image'></div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Career
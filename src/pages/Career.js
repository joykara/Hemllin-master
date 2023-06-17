import React from 'react'
import { Footer, AboutNavbar } from '../components';
import { RiMailSendLine, RiTeamLine } from 'react-icons/ri';
import { AiOutlineFundProjectionScreen, AiOutlineComment, AiOutlineFileSearch } from 'react-icons/ai';
import { VscReferences } from 'react-icons/vsc';
import { GiDiscussion } from 'react-icons/gi';
import { SiFuturelearn } from 'react-icons/si';
import { MdDiversity3, MdWork, MdOutlinePersonSearch } from 'react-icons/md';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import Cta from './Cta';

const Career = () => {
  return (
    <>
        <AboutNavbar/>
        <div className='hm-careers-container'>
            <section className='hm-careers-title'>
              <h2>Ready to Revolutionize Consulting?<br/>Join Our Team and Lead the Way!</h2>
              <div className="hm-careers-about-text">
                <p>At Hemllin, we believe that our success lies in the collective talents, expertise, and passion of our team members. We are always on the look out for exceptional individuals who can contribute to our dynamic and innovative consulting firm.</p>
                <p>Join us and embark on a journey where your skills will be honed, your ideas will be valued, and your career will thrive</p>
              </div>
            </section>

            <div className='hm-careers-intro'>
              {/* <div className="hm-careers-intro__about">
                  <div className="hm-career-about-title">
                      <h2><span>Working at Hemllin</span></h2>
                  </div>
              </div> */}

              <div className='hm-careers-intro__text'>
                <h3>Why Choose Hemllin?</h3>
              </div>

              <div className='hm-careers-intro__benefits'>
                <ul className='hm-career-benefits'>
                    <li className='benefit-tile scale-up'>
                        <div className='benefit-tile__image'>
                            <AiOutlineFundProjectionScreen size={45}/>
                        </div>
                        <h4>Meaningful Impact:</h4>
                        <div className='benefit-tile__text'>
                          <p>At Hemllin, our work is centred around making a tangible impact on our clients' businesses and the industries they operate in. As a consultant with us, you will have the opportunity to work on challenging projects, solve complex problems, and deliver strategic solutions that shape the future of our clients' organisations.</p>
                        </div>
                    </li>
                    <li className='benefit-tile scale-up'>
                        <div className='benefit-tile__image'>
                            <FaUserFriends size={45}/>
                        </div>
                        <h4>Collaborative Environment:</h4>
                        <div className='benefit-tile__text'>
                          <p>We foster a collaborative and inclusive work environment where teamwork and mutual respect are key. Our consultants come from diverse backgrounds, bringing together a wealth of experiences, perspectives, and skills. You'll be part of a supportive community that encourages knowledge sharing, professional growth, and personal development.</p>
                        </div>
                    </li>
                    <li className='benefit-tile scale-up'>
                        <div className='benefit-tile__image'>
                            <SiFuturelearn size={45}/>
                        </div>
                        <h4>Continuous Learning:</h4>
                        <div className='benefit-tile__text'>
                          <p>We are committed to the ongoing growth and development of our consultants. You will have access to comprehensive training programs, mentoring opportunities, and industry-leading resources to enhance your skills and stay ahead in a rapidly evolving business landscape. We believe in investing in our people and providing them with the tools they need to succeed.</p>
                        </div>
                    </li>
                    <li className='benefit-tile scale-up'>
                        <div className='benefit-tile__image'>
                            <MdDiversity3 size={45}/>
                        </div>
                        <h4>Client Exposure:</h4>
                        <div className='benefit-tile__text'>
                          <p>Working at Hemllin will give you the chance to collaborate with renowned clients from various industries. You'll gain invaluable exposure to diverse business challenges and develop a deep understanding of different sectors, positioning yourself as a trusted advisor and thought leader.</p>
                        </div>
                    </li>
                    <li className='benefit-tile scale-up'>
                        <div className='benefit-tile__image'>
                            <MdWork size={45}/>
                        </div>
                        <h4>Work-Life Balance:</h4>
                        <div className='benefit-tile__text'>
                          <p>We recognize the importance of maintaining a healthy work-life balance. While we are committed to delivering exceptional results for our clients, we also value your well-being and encourage you to prioritize self-care. We offer flexible work arrangements and provide a supportive culture that promotes both personal and professional fulfillment.</p>
                        </div>
                    </li>
                    <li className='benefit-tile scale-up'>
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

              <section className='hm-career-application'>
                <article className='career-application-process'>
                  <div className='hm-application-overview'>
                    <h3>Join Our Team</h3>
                    <p>At Hemllin, we believe that our success hinges on the talent and dedication of our employees. We have a rigorous and comprehensive selection process in place to ensure that we attract, assess, and onboard the best candidates who align with our values and contribute to our thriving work environment. Here's an overview of our employee selection process:</p>
                  </div>
                  <h4>Application Process:</h4>
                  <ul className='hm-application-process'>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>1 <span><RiMailSendLine/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4>Application and Resume Screening:</h4>
                        <p>Candidates interested in joining our team are invited to submit their applications and resumes through our designated online platform. Our HR team carefully reviews each application and screens resumes to assess candidates' qualifications, experience, and alignment with the role requirements.</p>
                      </div>
                    </li>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>2 <span><AiOutlineFileSearch/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4>Initial Screening:</h4>
                        <p>Qualified candidates who meet the initial criteria undergo an initial screening process, which may involve a phone interview or a preliminary assessment. During this stage, we evaluate candidates' communication skills, motivation, and overall fit for the organisation.</p>
                      </div>
                    </li>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>3 <span><AiOutlineComment/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4> In-Depth Interviews:</h4>
                        <p>Selected candidates proceed to in-depth interviews, typically conducted by a panel of interviewers representing various departments. These interviews delve deeper into the candidate's skills, experience, and cultural fit. We assess their technical competence, problem-solving abilities, and their alignment with our company values and mission.</p>
                      </div>
                    </li>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>4 <span><MdOutlinePersonSearch/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4>Assessments and Simulations:</h4>
                        <p>Depending on the role, candidates may be asked to complete assessments or participate in job-related simulations. These exercises allow us to evaluate their specific capabilities, such as critical thinking, problem-solving, leadership potential, or other relevant skills necessary for success in the role</p>
                      </div>
                    </li>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>5 <span><VscReferences/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4>Reference Checks:</h4>
                        <p>We conduct thorough reference checks for candidates who have progressedsuccessfully through the previous stages. This step involves contactingprovided references to gain insights into the candidate's past performance,work ethic, and interpersonal skills.</p>
                      </div>
                    </li>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>6 <span><GiDiscussion/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4>Final Interview and Decision:</h4>
                        <p>Shortlisted candidates may be invited for a final interview with senior management or key stakeholders. This interview serves as an opportunity for both parties to ensure alignment, discuss expectations, and address any remaining questions. After careful consideration, a final decision is made, and the selected candidate is extended an offer of employment.</p>
                      </div>
                    </li>
                    <li className='hm-application-process__step scale-up'>
                      <div className='hm-application-process__step-number'>
                        <h3>7 <span><RiTeamLine/></span></h3>
                      </div>
                      <div className='hm-application-process__step-text'>
                        <h4>Onboarding and Integration:</h4>
                        <p>Once the offer is accepted, we initiate the onboarding process to ensure a smooth transition for the new employee. We provide comprehensive orientation and training to familiarise them with our company culture, values, processes, and their role responsibilities. We strive to create an environment where new hires feel supported, engaged, and ready to make an impact from day one.</p>
                      </div>
                    </li>
                  </ul>
                </article>
              </section>
            </div>
        </div>
        <Cta ctaTitle='Ready to Work with Us?' ctaLink1='/contact-us' ctaLink1Text='Contact Us'ctaLink2='/contact-us' ctaLink2Text='Contact Us'/>
        <Footer/>
    </>
  )
}

export default Career
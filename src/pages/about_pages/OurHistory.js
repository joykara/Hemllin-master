import React from 'react';
import { AboutNavbar, Footer } from '../../components';
import { CgArrowLongRight } from 'react-icons/cg';
import { AiOutlineLine } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';

const OurHistory = () => {
  return (
    <>
        <AboutNavbar />
        <div className="hm-history-container">
            <div className="hm-history-content">
                <div className="hm-history-title">
                    <h1>History of Our Company</h1>
                </div>
                <div className="hm-history-text">
                    <p>Welcome to our consultancy firm, where we combine a rich history of expertise with a fresh perspective on solving complex challenges. Established in 2019, our firm has rapidly evolved into a trusted partner for clients seeking innovative solutions and strategic guidance. Since our inception, we have built a solid foundation rooted in a deep understanding of various industries and a commitment to delivering exceptional results. Over the years, we have continuously refined our methodologies and expanded our team of talented professionals, enabling us to stay at the forefront of industry trends and effectively address the evolving needs of our clients. With a blend of experience, passion, and adaptability, we are proud of our journey and remain dedicated to providing cutting-edge consultancy services that drive success and growth for our clients.</p>
                    <div className="hm-history-content__nav">
                        <p>Jump to <span className='arrow'><CgArrowLongRight size={30}/></span></p>
                        <div className="hm-history-content__nav--links">
                            <button><Link to='#hm-2019-history'>2019</Link></button>
                            <button><Link to='#hm-2020-history'>2020</Link></button>
                            <button><Link to='#hm-2021-history'>2021</Link></button>
                            <button><Link to='#hm-2022-history'>2022</Link></button>
                            <button><Link to='#hm-2023-history'>2023</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hm-history-video">
            </div>
            <div className="hm-history-details">
                <div id='hm-2019-history'>
                    <div className='history-img'></div>
                    <span className='border-line'></span>
                    <div className='history-content'>
                        <span><AiOutlineLine size={20}/></span>
                        <div className='history-content-text'>
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                    </div>
                </div>
                <div id='hm-2020-history'>
                    <div className='history-img'></div>
                    <span className='border-line'></span>
                    <div className='history-content'>
                        <span><AiOutlineLine size={20}/></span>
                        <div className='history-content-text'>
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                    </div>
                </div>
                <div id='hm-2021-history'>
                    <div className='history-img'></div>
                    <span className='border-line'></span>
                    <div className='history-content'>
                        <span><AiOutlineLine size={20}/></span>
                        <div className='history-content-text'>
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                    </div>
                </div>
                <div id='hm-2022-history'>
                    <div className='history-img'></div>
                    <span className='border-line'></span>
                    <div className='history-content'>
                        <span><AiOutlineLine size={20}/></span>
                        <div className='history-content-text'>
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                    </div>
                </div>
                <div id='hm-2023-history'>
                    <div className='history-img'></div>
                    <span className='border-line'></span>
                    <div className='history-content'>
                        <span><AiOutlineLine size={20}/></span>
                        <div className='history-content-text'>
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default OurHistory
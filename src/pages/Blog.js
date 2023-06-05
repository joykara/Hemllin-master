/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill } from 'react-icons/ri';
import AboutNavbar from '../components/aboutnav/AboutNavbar'
import Article from '../container/article/Article'
import Footer from '../components/footer/Footer'
import arrow from '../assets/Vector.png'

const Blog = () => {
  return (
    <>
        <AboutNavbar/>
        <div className="blog-container">
          <div className="blog-intro">
            <a href="/about"><span className='arrow'><img src={arrow} alt="arrow nav" />Back to About Us Overview</span></a>
            <h2>Hemllin Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <ul className="blog-cta-social-links">
            <li><a href=""><RiLinkedinFill size={25}/></a></li>
            <li><a href=""><RiTwitterFill size={25}/></a></li>
            <li><a href=""><RiFacebookCircleFill size={25}/></a></li>
            <li><a href=""><RiYoutubeFill size={25}/></a></li>
          </ul>
          <div className="browse-blog">
            <h4>BROWSE BLOG</h4>
            <div className='browse-blog-options'>
              <p>Browse by: <span>Lorem</span> | <span>Lorem</span></p>
            </div>  
          </div>

          <div className="blog-details">
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
            <Article articleTitle='Lorem ipsum dolor sit amet consectetur ' articleUrl='https://www.google.com' articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos reiciendis laudantium'/>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Blog
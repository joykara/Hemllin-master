/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from 'react'
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';
import AboutNavbar from '../components/aboutnav/AboutNavbar';
import Footer from '../components/footer/Footer'
import arrow from '../assets/Vector.png'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';

const Blog = () => {
  // fetch blogs from api and display them
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  useEffect(()=> {
    const fetchBlogs = async () => {
      const res = await axios.get('/blog-posts');
      setBlogs(res.data);
    }
    fetchBlogs();
  }, [location]);
  console.log('Blog:', blogs)

  if (!blogs) {
    return <p>Loading...</p>;
  }
  
  // if(!Array.isArray(blogs))return null;
  // let blogListItems= [];
  // for(let i=0; i<blogs.length; i++){
  //   blogListItems.push(
  //     <div className='article' key={blogs[i].id}>
  //       <div className="article-image">
  //       </div>
  //       <div className="article-content">
  //         <h3><Link to={blogs[i].url}>{blogs[i].title}</Link></h3>
  //         <span>{blogs[i].category}</span>
  //         <span> by: {blogs[i].author} </span>
  //         <p>{blogs[i].desc}</p>
  //       </div>
  //     </div>
  //   )
  // }



  return (
    <>
        <AboutNavbar/>
        <div className="blog-container">
          <div className="blog-intro">
            <a href="/about-us"><span className='arrow'><img src={arrow} alt="arrow nav" />Back to About Us Overview</span></a>
            <h2>Hemllin Blog</h2>
            <p>Welcome to our Hemllin blog!</p>
          </div>
          <ul className="blog-cta-social-links">
            <li><Link to="https://www.linkedin.com/company/hemllin/?viewAsMember=true"><BsLinkedin size={22}/></Link></li>
            <li><Link to="https://twitter.com/hemllin"><AiFillTwitterSquare size={27}/></Link></li>
            <li><Link to="https://www.instagram.com/hemllin/"><RiInstagramFill size={25}/></Link></li>
            <li><Link to="http://facebook.com/hemllin/"><RiFacebookCircleFill size={25}/></Link></li>
            <li><Link to="https://www.youtube.com/@hemllin/featured"><BsYoutube size={25}/></Link></li>
          </ul>
          <div className="browse-blog">
            <h4>BROWSE BLOG</h4>
            <div className='browse-blog-options'>
              <p>Browse by: <span>Lorem</span> | <span>Lorem</span></p>
            </div>
          </div>

          <div className="blog-details">
          {/* fetch blogs */}
            {/* {blogListItems} */}
          {Array.isArray(blogs) ? (
            blogs.map(blog => (
              <div className='article' key={blog.id}>
                <div className="article-image">
                <img src={`/uploads/${blog.image}`} alt="Blog Image" />
                </div>
                <div className="article-content">
                  <h3><Link to={blog.url}>{blog.title}</Link></h3>
                  <span> by: {blog.author} </span>
                  <p>{blog.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading blogs...</p> // Add appropriate handling when blogs is not an array
          )}
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Blog
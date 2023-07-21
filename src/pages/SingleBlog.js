import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AboutNavbar, Footer } from '../components';
import heroImg from '../server/uploads/blog.jpg';
import arrow from '../assets/Vector.png';

const SingleBlog = () => {
  const { id } = useParams(); // Extract the blog ID from the route parameters
    const [blog, setBlog] = useState(null);

    const location = useLocation()
    console.log(location.pathname); // result: '/secondpage'

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blog-posts/${(id)}`); // Parse id as a number
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <AboutNavbar />;
  }

    return (
      <>
        <AboutNavbar />
        <div className="single-blog-container">

          <Link to="/about-us/blog"><span className='arrow'><img src={arrow} alt="arrow nav" />Back to Blogs</span></Link>

          <h1>{blog.title}</h1>
          <div className="single-blog__image">
            <img src={heroImg} alt="Blog Image" />
          </div>
          <span>{new Date(blog.createdAt).toDateString()}</span>
          <p className='blog-author'><span> Author:</span>{blog.author}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.text }}></div>
        </div>
        <Footer/>
      </>
  );
};

export default SingleBlog;

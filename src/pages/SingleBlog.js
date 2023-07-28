import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Footer, Navbar2 } from '../components';
import arrow from '../assets/Vector.png';

const SingleBlog = () => {
  const { id } = useParams(); // Extract the blog ID from the route parameters
    const [blog, setBlog] = useState(null);

    const location = useLocation()
    console.log(location.pathname); // result: '/secondpage'

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://localhost:5000/blog-posts/${(id)}`); // Parse id as a number
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <Navbar2 />;
  }

    return (
      <>
     <div className='main-container'>
        <Navbar2 />
        <div className="single-blog-container">

          <Link to="/about-us/blog"><span className='arrow'><img src={arrow} alt="arrow nav" />Back to Blogs</span></Link>

          <h1>{blog.title}</h1>
          <div className="single-blog__image">
                <img src={blog.image} alt="Blog Pic" />
          </div>
          <span>{new Date(blog.createdAt).toDateString()}</span>
          <p className='blog-author'><span> Author:</span>{blog.author}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.text }}></div>
        </div>
          <Footer />
      </div>
      </>
  );
};

export default SingleBlog;

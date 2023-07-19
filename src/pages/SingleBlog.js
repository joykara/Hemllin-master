import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AboutNavbar } from '../components';

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
    return <p>Loading...</p>;
  }

    return (
      <>
        <AboutNavbar />
        <div className="single-blog-container">
            <h2>{blog.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.text }}></div>
            <Link to="/about-us/blog">Back to Blogs</Link>
        </div>
      </>
  );
};

export default SingleBlog;

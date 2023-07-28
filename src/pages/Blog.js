/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from 'react'
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';
import Footer from '../components/footer/Footer'
import arrow from '../assets/Vector.png'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { Navbar2 } from '../components';

const Blog = () => {
  // fetch blogs from api and display them
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("https://hemllin-master.vercel.app:443/blog-posts");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, [location]);

  console.log("Blog:", blogs);

  if (!blogs) {
    return <p>Loading...</p>;
  }

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category.includes(selectedCategory))
    : blogs;


  return (
    <>
     <div className='main-container'>
        <Navbar2 />
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
            <div className="browse-blog-options">
              <p>
                Browse by:{" "}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Animation">Animation</option>
                  <option value="Finance">Finance</option>
                  <option value="Leadership">Leadership</option>
                  <option value="Management">Management</option>
                  <option value="Technology">Technology</option>
                  {/* Add more options for each category you have */}
                </select>{" "}
                {/* | <span>Lorem</span> */}
              </p>
            </div>
          </div>

          <div className="blog-details">
          {/* fetch blogs */}
            {/* {blogListItems} */}
          {Array.isArray(blogs) ? (
            filteredBlogs.map((blog) => (
              <div className="article scale-up" key={blog.id}>
                <div className="article-image">
                  <img src={blog.image} alt="Blog Pic" />
                </div>
                <div className="article-content">
                  <h3>
                    <Link to={`/blog-posts/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <span>{new Date(blog.createdAt).toDateString()}</span>
                  <span> by: {blog.author} </span>
                  <p>{blog.desc}</p>
                  <span>Category: {blog.category}</span>
                </div>
              </div>
            ))
          ) : (
            <p>Loading blogs...</p> // Add appropriate handling when blogs is not an array
          )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Blog
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  RiFacebookCircleFill,
  RiLinkedinFill,
  RiInstagramFill,
} from "react-icons/ri";
import Footer from "../components/footer/Footer";
import arrow from "../assets/Vector.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Navbar2 } from "../components";

const Blog = () => {
  // fetch blogs from api and display them
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:5000/blog-posts");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, [location]);

  console.log("Blog:", blogs);
  const truncateText = (text, lines = 3) => {
    const lineArray = text.split("\n").slice(0, lines);
    return (
      lineArray.join("\n") +
      (lineArray.length < text.split("\n").length ? "..." : "")
    );
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category.includes(selectedCategory))
    : blogs;

  return (
    <>
      <div className="main-container">
        <Navbar2 />
        <div className="blog-container">
          <div className="blog-intro">
            <a href="/about-us">
              <span className="arrow">
                <img src={arrow} alt="arrow nav" />
                Back to About Us Overview
              </span>
            </a>
            <h2>Hemllin Blog</h2>
            <p>Welcome to our Hemllin blog!</p>
          </div>
          <ul className="blog-cta-social-links">
            <li>
              <Link
                to="https://www.linkedin.com/company/hemllin/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinFill size={22} />
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/hemllin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/hemllin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="http://facebook.com/hemllin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookCircleFill size={25} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/@hemllin/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube size={25} />
              </Link>
            </li>
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

          {blogs.length === 0 ? (
            <div className="blog-details" id="blog-empty">
              <p>Kindly visit us later as we get to update our blogs!</p>
            </div>
          ) : (
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
                      <p>{truncateText(blog.desc)}</p>
                      <span>Category: {blog.category}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading blogs...</p> // Add appropriate handling when blogs is not an array
              )}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;

// create blog post routes
const express = require('express');
const router = express.Router();

const BlogPost = require('../models/blogsModel');

// get all blogs
router.get('/blog-posts', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.send(blogPosts);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

// get blog post by id
router.get('/blog-posts/:id', async (req, res) => {
    const id = req.query.id;
    try {
        const blogPost = await BlogPost.findById({ id });
        res.send(blogPost);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

// get blog post of specific category
router.get('/blog-posts/category/:category', async (req, res) => {
    try {
        // find all the documents where 'categories' array contains a value equal to given parameter in query
        const blogPost = await BlogPost.find({ categories: req.params.category });
        res.send(blogPost);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

// send blog posts
router.post('/blog-posts', async (req, res) => {
    try {
        const blogPost = new BlogPost({
            id: req.body.id,
            author: req.body.author,
            title: req.body.title,
            desc: req.body.desc,
            text: req.body.text,
            category: req.body.category,
            image: req.body.image,
            url: req.body.url
        })
        await blogPost.save();
        res.send(blogPost);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

module.exports = router;
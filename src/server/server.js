const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Subscription = require('./models/subscriptionModel');
const ContactForm = require('./models/contactFormModel');
const BlogPost = require('./models/blogsModel');
const app = express();

// import route
// const blogRoute = require('./routes/blogRoute');
// app.use('/blog-posts', blogRoute)

// Enable CORS for all routes
const cors = require('cors');
app.use(cors());


// app.use('/uploads', express.static('uploads'));
// send blog post image
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'src', 'server', 'uploads')));

// use express middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

// get subscription data
app.get('/subscriptions', async (req, res) => {
    try {
        const subscription = await Subscription.find();
        res.send(subscription);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

// get subscription data by email
app.get('/subscriptions/:email', async (req, res) => {
    try {
        const subscription = await Subscription.findOne({ email: req.params.email });
        res.send(subscription);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

// get all email subscription data only
app.get('/subscriptions/emails', async (req, res) => {
    try {
        const subscription = await Subscription.findBy({ email: req.params.email});
        res.send(subscription);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

// send subscription data
app.post('/subscriptions', async(req, res) => {
    try {
        const subscription = new Subscription({
            email: req.body.email
        })
        await subscription.save();
        res.send(subscription);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
})

//get contact form data
app.get('/contact-us/data', async (req, res) => {
    try {
        const contactForm = await ContactForm.find();
        res.send(contactForm);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

// send contact form data
app.post('/contact-us/data', async (req, res) => {
    try {
        const contactForm = new ContactForm({
            name: req.body.name,
            email: req.body.email,
            organization: req.body.organization,
            title: req.body.title,
            subject: req.body.subject,
            question: req.body.question,
            message: req.body.message
        })
        await contactForm.save();
        res.send(contactForm);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})


// get blog posts
app.get('/blog-posts', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.send(blogPosts);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

// get blog post by id
app.get('/blog-posts/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findOne({ id: req.params.id });
        res.send(blogPost);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

// get blog post of specific category
app.get('/blog-posts/category/:category', async (req, res) => {
    try {
        // find all the documents where 'categories' array contains a value equal to given parameter in query
        const blogPost = await BlogPost.find({ categories: req.params.category });
        res.send(blogPost);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})
// send blog posts
app.post('/blog-posts', async (req, res) => {
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

// connect mongoose
mongoose.connect('mongodb+srv://system:VTq1ArIojdcaZPrt@hemllin.22xovxl.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database');
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    })
}
).catch((error) => {
    console.log(error);
    console.log('Connection failed');
})

// Path: src\server\models\subscriptionModel.js

const express = require('express');
const mongoose = require('mongoose');
const Subscription = require('./models/subscriptionModel');
const ContactForm = require('./models/contactFormModel');
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());


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

// connect mongoose
mongoose.connect('mongodb+srv://admin:ms7Mm9VYyA9v8i37@hemllinapi.h2s1x7a.mongodb.net/Hemllin-API?retryWrites=true&w=majority')
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

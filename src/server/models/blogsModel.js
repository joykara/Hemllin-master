const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        author: {
            type: String,
            required: true
        },
        category: {
            type: Array,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;  //exporting the model so that it can be used
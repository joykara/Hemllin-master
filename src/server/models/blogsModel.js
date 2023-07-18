const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        author: {
            type: String,
            required: false
        },
        category: {
            type: Array,
            required: true
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
            required: false
        },
        text: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;  //exporting the model so that it can be used
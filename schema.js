const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5
    },
    content: {
      type: String,
      required: true,
      minlength: 50
    },
    author: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      default: []
    },
    category: {
      type: String,
      default: "General"
    },
    likes: {
      type: [String],
      default: []
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date
    },
    comments: [
      {
        username: {
          type: String,
          required: true
        },
        message: {
          type: String,
          required: true
        },
        commentedAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  });
  
  const BlogPost = mongoose.model('BlogPost', blogPostSchema);
  module.exports = BlogPost;





  
import React from 'react';
import './blog.css';
import BlogHeader from '../components/BlogHeader';
import BlogArticle from '../components/BlogArticle';
import Sidebar from '../components/Sidebar';
import Comment from '../components/Comment'


const Blog = (props) => {
  return (
    <body class="blog-page">
      <BlogHeader />
      <div class="wrap grid-wrapper">
        <BlogArticle />
        <Sidebar />
      </div>
      <Comment />
    </body>
  )
}

export default Blog;
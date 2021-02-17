import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllBlogs } from 'Redux/Actions/blogAction';
import Jumbotron from './Jumbotron';
import BlogCollection from './BlogCollection';

const Home = ({ getAllBlogs, blogs }) => {
  console.log(blogs[0]);
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);
  return (
    <div>
      <Jumbotron {...blogs[0]} />
      <BlogCollection />
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogStates.blogs,
});

export default connect(mapStateToProps, { getAllBlogs })(Home);

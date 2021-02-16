import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllBlogs } from 'Redux/Actions/blogAction';
import Jumbotron from './Jumbotron';

const Home = ({ getAllBlogs, blogs }) => {
  console.log(blogs[0]);
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);
  return (
    <div>
      <Jumbotron {...blogs[0]} />
      <h1>This is home Page</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogStates.blogs,
});

export default connect(mapStateToProps, { getAllBlogs })(Home);

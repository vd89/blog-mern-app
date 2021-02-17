import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getBlogById } from 'Redux/Actions/blogAction';
import { useParams } from 'react-router-dom';
import BlogCard from './BlogCard';

const SingleBlog = ({ getBlogById, loading, blog }) => {
  const { id } = useParams();
  useEffect(() => {
    getBlogById(id);
  }, [getBlogById, id]);

  return <>{loading ? <h1>loading</h1> : <BlogCard {...blog} />}</>;
};

const mapStateToProps = state => ({
  blog: state.blogStates.blog,
  loading: state.blogStates.loading,
});

export default connect(mapStateToProps, { getBlogById })(SingleBlog);

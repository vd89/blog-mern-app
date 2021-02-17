import React from 'react';
import { connect } from 'react-redux';
import BlogCard from './BlogCard';

const BlogCollection = ({ blogs, loading }) => {
  return (
    <div className="container">
      <div>
        {loading ? (
          <div>
            <h1>Loading......</h1>
          </div>
        ) : (
          <div className="card-columns">
            {blogs.map(blog => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogStates.blogs,
  loading: state.blogStates.loading,
});
export default connect(mapStateToProps)(BlogCollection);

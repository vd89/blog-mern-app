import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getBlogById } from 'Redux/Actions/blogAction';
import { useParams } from 'react-router-dom';

const SingleBlog = ({ getBlogById, loading, blog: { title, subTitle, description } }) => {
  const { id } = useParams();
  useEffect(() => {
    getBlogById(id);
  }, [getBlogById, id]);

  if (loading) {
    return <h1>Loading ....</h1>;
  }
  return (
    
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h5 className="card-title">{subTitle}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  blog: state.blogStates.blog,
  loading: state.blogStates.loading,
});

export default connect(mapStateToProps, { getBlogById })(SingleBlog);

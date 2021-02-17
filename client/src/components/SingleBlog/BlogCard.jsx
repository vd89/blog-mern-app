import React from 'react';

const BlogCard = ({ title, subTitle, description }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{subTitle}</h6>
          {description.split('\n').map((item, i) => (
            <p className="card-text" key={i}>
              {item}
            </p>
          ))}
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

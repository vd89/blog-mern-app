import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogCard = ({ title, subTitle, description, _id }) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/${_id}`);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <h5 className="card-subtitle">{subTitle}</h5>
        <p className="mt-4">{description.split('\n')[0].substr(0, 100)}...</p>
        <button type="button" className="btn btn-link" onClick={onClickHandler}>
          See More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

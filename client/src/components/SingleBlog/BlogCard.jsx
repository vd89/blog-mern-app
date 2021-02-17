import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteBlog } from 'Redux/Actions/blogAction';

const BlogCard = ({ title, subTitle, description, _id, deleteBlog }) => {
  const history = useHistory();
  const onClickHandlerRemove = () => {
    deleteBlog(_id);
    history.push('/');
  };
  const onClickHandlerUpdate = () => {
    history.push('/edit');
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{subTitle}</h5>
          {description?.split('\n').map((item, i) => (
            <p className="card-text" key={i}>
              {item}
            </p>
          ))}
        </div>
        <div className="card-footer ">
          <button type="button" onClick={onClickHandlerRemove} class="btn btn-outline-danger mr-5">
            Delete
          </button>
          <button type="button" onClick={onClickHandlerUpdate} class="btn btn-outline-info ml-5">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteBlog })(BlogCard);

import React from 'react';
import { useHistory } from 'react-router-dom';

const Jumbotron = ({ title, _id, subTitle }) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/${_id}`);
  };
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{title}</h1>
        <p className="lead">{subTitle}</p>
        <hr className="my-4" />
        <p className="lead">
          <button onClick={onClickHandler} className="btn btn-primary btn-lg">
            Learn more
          </button>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateBlog } from 'Redux/Actions/blogAction';

const EditBlog = ({ blog, updateBlog }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: blog.title,
    subTitle: blog.subTitle,
    description: blog.description,
  });
  const { title, subTitle, description } = formData;
  const onChangeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    updateBlog(blog._id, formData);
    history.push('/');
  };
  return (
    <div>
      <div className="container center mt-5 mb-5">
        <div className="card ">
          <div className="card-header">
            <h2>Post Your Blog Here.....</h2>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <div class="form-group">
                <label for="title">Title</label>
                <div class="col-sm-10">
                  <input type="text" name="title" class="form-control" id="title" value={title} onChange={onChangeHandler} />
                </div>
              </div>
              <div class="form-group">
                <label for="subtitle">SubTitle</label>
                <div class="col-sm-10">
                  <input type="text" name="subTitle" class="form-control" id="subtitle" value={subTitle} onChange={onChangeHandler} />
                </div>
              </div>
              <div className="form-group">
                <label for="description">Example textarea</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onChangeHandler}
                  id="description"
                  rows="3"
                  spellcheck="true"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  blog: state.blogStates.blog,
});
export default connect(mapStateToProps, { updateBlog })(EditBlog);

import { CREATE_BLOG, GET_ALL_BLOGS, GET_BLOG_BY_ID, NO_BLOG, REMOVE_BLOG, UPDATE_BLOG } from 'Redux/Types';
import Api from 'utils/Api';
import { setAlert } from './alertAction';

export const getAllBlogs = () => async dispatch => {
  try {
    const { data } = await Api.get('/blog/');
    console.log(data.result);
    dispatch({
      type: GET_ALL_BLOGS,
      payload: data.result,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: NO_BLOG,
    });
  }
};

export const getBlogById = id => async dispatch => {
  try {
    const { data } = await Api.get(`/blog/${id}`);
    console.log(data);
    dispatch({
      type: GET_BLOG_BY_ID,
      payload: data.result,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: NO_BLOG,
    });
  }
};

export const createBlog = formData => async dispatch => {
  try {
    const { data } = await Api.post(`/blog/create`, formData);
    console.log(data.result);
    dispatch({
      type: CREATE_BLOG,
      payload: data.result,
    });
    dispatch(setAlert('Blog Created', 'success'));
  } catch (e) {
    console.error(e);
    dispatch({
      type: NO_BLOG,
    });
  }
};

export const deleteBlog = blogId => async dispatch => {
  try {
    const { data } = await Api.delete(`/blog/${blogId}`);
    dispatch({
      type: REMOVE_BLOG,
    });
    dispatch(setAlert(data.result, 'success'));
  } catch (e) {
    console.error(e);
  }
};

export const updateBlog = (blogId, formData) => async dispatch => {
  try {
    await Api.put(`/blog/${blogId}`, formData);
    dispatch({
      type: UPDATE_BLOG,
    });
  } catch (e) {
    console.error(e);
  }
};

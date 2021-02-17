import { CREATE_BLOG, GET_ALL_BLOGS, GET_BLOG_BY_ID, NO_BLOG } from 'Redux/Types';
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

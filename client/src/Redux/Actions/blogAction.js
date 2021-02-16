import { GET_ALL_BLOGS, GET_BLOG_BY_ID, NO_BLOG } from 'Redux/Types';
import Api from 'utils/Api';

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

import { GET_ALL_BLOGS, GET_BLOG_BY_ID, NO_BLOG } from 'Redux/Types';

const INITIAL_STATE = {
  loading: true,
  blogs: [],
  blog: null,
};

const blogReducer = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false,
      };
    case GET_BLOG_BY_ID:
      return {
        ...state,
        blog: payload,
        loading: false,
      };

    case NO_BLOG:
      return state;
    default:
      return state;
  }
};

export default blogReducer;

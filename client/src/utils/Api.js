import Axios from 'axios';

export default Axios.create({
  baseURL: '/api/blog',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

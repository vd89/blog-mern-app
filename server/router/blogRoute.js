import { Router } from 'express';
import blogController from '../controller/blogController';
import upload from '../lib/upload';

const blogRoute = new Router();
const { getAllBlog, postBlog } = blogController;

//Get all blogs
blogRoute.get('/', getAllBlog);

// Create blog
blogRoute.post('/create', upload, postBlog);

export default blogRoute;

import { Router } from 'express';
import blogController from '../controller/blogController';
import upload from '../lib/upload';

const blogRoute = new Router();
const { getAllBlog, postBlog, getBlogByID, deleteBlog, updateBlog } = blogController;

//Get all blogs
blogRoute.get('/', getAllBlog);

// Create blog
blogRoute.post('/create', upload, postBlog);

// Get single blog by id
blogRoute.get('/:id', getBlogByID);

//Update the blog
blogRoute.put('/:id', upload, updateBlog);

// Delete blog by id
blogRoute.delete('/:id', deleteBlog);

export default blogRoute;

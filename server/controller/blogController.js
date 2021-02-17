import blogModel from '../models/blogModel';

export default {
  // Get All Blog
  getAllBlog: async (req, res, next) => {
    try {
      const blogs = await blogModel.find();
      res.status(200).json({ msg: 'Success', result: blogs });
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
  postBlog: async (req, res, next) => {
    try {
      const { title, subTitle, description } = req.body;
      const newBlog = new blogModel({ title, subTitle, description });
      await newBlog.save();
      res.status(200).json({ msg: 'Success', result: newBlog });
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
  getBlogByID: async (req, res, next) => {
    try {
      const id = req.params.id;
      const blog = await blogModel.findById(id);
      res.status(200).json({ msg: 'Success', result: blog });
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
  deleteBlog: async (req, res, next) => {
    try {
      const id = req.params.id;
      await blogModel.findByIdAndDelete(id);
      res.status(200).json({ msg: 'Success', result: 'Blog is deleted' });
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
  updateBlog: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { title, subtitle, description } = req.body;
      await blogModel.findByIdAndUpdate(id, { title, subtitle, description });
      const neBlog = await blogModel.findById(id);
      res.status(200).json({ msg: 'Success', result: neBlog });
    } catch (e) {
      console.error(e);
      next(e);
    }
  },
};

export default {
  // Get All Blog
  getAllBlog: (req, res, next) => {
    res.status(200).json({ msg: 'Success', result: 'Get All Blogs' });
  },
  postBlog: (req, res, next) => {
    const newResult = { file: req.file.filename, body: req.body };
    res.status(200).json({ msg: 'Success', result: newResult });
  },
};

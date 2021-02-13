import { Router } from 'express';

const blogRoute = new Router();

blogRoute.post('/blog', (req, res) => {
  res.status(200).json({ msg: 'Success', result: req.body });
});

export default blogRoute;

import url from 'url';

export default {
  errHandler: (err, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      data: {
        msg: err.message,
        stack: process.env.NODE_ENV === 'production' ? ' 🌵 🌵' : err.stack,
      },
    });
    next();
  },
  notFound: (req, res, next) => {
    const error = new Error(`Not found -${req.originalUrl}`);
    res.status(404);
    next(error);
  },
};

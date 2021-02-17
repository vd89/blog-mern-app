import multer from 'multer';
import path from 'path';

// Set Storage engine
const storage = multer.diskStorage({
  destination: 'client/public/uploads',
  filename: (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
}).single('blogImage');

export default upload;

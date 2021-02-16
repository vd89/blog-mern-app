import { Schema, model } from 'mongoose';
import encryptLib from '../lib/encryptLib';

const BlogSchema = new Schema({
  _id: { type: String, default: () => `Blog${Date.now()}${encryptLib.generateRandomString(4)}` },
  title: { type: String },
  subTitle: { type: String },
  description: { type: String },
  blogImage: { type: String },
});

class Blog {}
BlogSchema.loadClass(Blog);

export default model('Blog', BlogSchema);

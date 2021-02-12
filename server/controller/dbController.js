import { connect } from 'mongoose';
import serverConfig from '../serverConfig';

const mongoPass = serverConfig.MONGO_PASSWORD;
const mongoUser = serverConfig.MONGO_USER;

const dbController = async () => {
  try {
    const url = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.sixrx.mongodb.net/BlogsDb?retryWrites=true&w=majority`;
    const option = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
    await connect(url, option);
    console.info(`Database connected with the application .... 🌵 🌵`);
  } catch (err) {
    console.error('MongoErr :>>', err.message);
  }
};
export default dbController;

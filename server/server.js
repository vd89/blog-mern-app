import express from 'express';
import { Server } from 'http';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import serverConfig from './serverConfig.js';
import dbController from './controller/dbController';
import handler from './lib/handler.js';

const PORT = serverConfig.PORT;
const ORIGIN = serverConfig.ORIGIN;
const app = express();

export const server = new Server(app);
export const serverStarted = async () => {
  app.use(morgan('combined'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors({ ORIGIN }));

  // Route
  app.get('/ping', async (req, res, next) => {
    try {
      return res.status(200).json({ msg: 'Success', data: 'pong' });
    } catch (e) {
      console.error(e);
      next(e);
    }
  });

  // Error handler
  app.use(handler.notFound);
  app.use(handler.errHandler);

  // Connect to Db
  await dbController();
  server.listen(PORT, () => {
    console.log(`Server Is running at ${PORT}`);
  });
};

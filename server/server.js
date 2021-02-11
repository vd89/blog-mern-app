import express from 'express';
import { Server } from 'http';

const app = express();

export const server = new Server(app);
export const serverStarted = async () => {
  server.listen(5000, () => {
    console.log('Server Started at Port 5000');
  });
};

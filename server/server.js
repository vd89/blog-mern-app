import express from 'express';
import { Server } from 'http';
import serverConfig from './serverConfig.js';

const PORT = serverConfig.PORT;
const app = express();

export const server = new Server(app);
export const serverStarted = async () => {
  server.listen(PORT, () => {
    console.log(`Server Is running at ${PORT}`);
  });
};

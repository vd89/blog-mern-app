import config from 'config';

const serverConfig = {
  PORT: config.get('PORT') || process.env.PORT,
  MONGO_PASSWORD: config.get('MONGO_PASSWORD') || process.env.MONGO_PASSWORD,
  MONGO_USER: config.get('MONGO_USER') || process.env.MONGO_USER,
};

export default serverConfig;

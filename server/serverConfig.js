import config from 'config';

const serverConfig = {
  PORT: config.get('PORT') || '',
  MONGO_PASSWORD: config.get('MONGO_PASSWORD'),
  MONGO_USER: config.get('MONGO_USER'),
};

export default serverConfig;

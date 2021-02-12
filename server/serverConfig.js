import config from 'config';

const serverConfig = {
  PORT: config.get('PORT') || '',
};

export default serverConfig;

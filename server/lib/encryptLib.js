import crypto from 'crypto';

export default {
  generateRandomString: l => {
    return crypto
      .randomBytes(Math.ceil(l / 2))
      .toString('hex')
      .slice(0, l);
  },
};

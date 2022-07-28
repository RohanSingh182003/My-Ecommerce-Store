module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '247b26a6af1a92678108a3b40ce8955e'),
  },
});

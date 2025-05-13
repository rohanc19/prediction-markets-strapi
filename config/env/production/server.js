module.exports = ({ env }) => ({
  url: env('RENDER_EXTERNAL_URL'),
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
});

module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('STRAPI_URL'),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '693e0d5776cd8cb2291f1791066a0569'),
      },
      url: env('STRAPI_URL', 'api')
    },
  });
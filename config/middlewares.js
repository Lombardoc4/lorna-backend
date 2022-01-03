module.exports = [
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              'lornashore.s3.us-east-1.amazonaws.com',
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'lornashore.s3.us-east-1.amazonaws.com',
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
  ];
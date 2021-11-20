module.exports = ({ env }) => ({
  upload: {
    provider: "do",
    providerOptions: {
      key: env('DO_SPACE_ACCESS_KEY'),
      secret: env('DO_SPACE_SECRET_KEY'),
      endpoint: env('DO_SPACE_ENDPOINT'),
      space: env('DO_SPACE_BUCKET')
    }
  }
});

// Not sure if this or extensions/upload/config/settings is working?
module.exports = ({ env }) => ({
  // upload: {
  //   provider: "aws-s3",
  //   providerOptions: {
  //     key: env('DO_SPACE_ACCESS_KEY'),
  //     secret: env('DO_SPACE_SECRET_KEY'),
  //     endpoint: env('DO_SPACE_ENDPOINT'),
  //     space: env('DO_SPACE_BUCKET')
  //   }
  // }
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  },
});

// Not sure if this or extensions/upload/config/settings is working?
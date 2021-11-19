module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host     : "app-b5c4663b-ed0b-40fc-bda9-a9a6652a9c2d-do-user-9074514-0.b.db.ondigitalocean.com",
        port     : "25060",
        username : "db",
        password : "chhfizcOwAJkR77O",
        database : "db",
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

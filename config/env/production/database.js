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
        password : env(DATABASE_PASSWORD),
        database : "db",
        sslmode  : "require"
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

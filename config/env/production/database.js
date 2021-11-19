module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host     : "app-c7a12073-8a9f-4857-a637-0a1a510aa942-do-user-9074514-0.b.db.ondigitalocean.com",
        port     : "25060",
        username : "db",
        password : "0JI2Fq8fXdo48xSc",
        database : "db",
        sslmode  : "require"
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

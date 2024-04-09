module.exports = {
  development: {
    username: process.env.USER_DEV,
    password: process.env.PASSWORD_DEV,
    // database: "database_development",
    database: process.env.DATABASE_DEV || "database_development",
    host: process.env.HOST_DEV,
    dialect: "postgres",
  },
  test: {
    username: process.env.USER_TEST,
    password: process.env.PASSWORD_TEST,
    database: process.env.DATABASE_TEST,
    host: process.env.HOST_TEST,
    dialect: "postgres",
  },
  production: {
    username: process.env.USER_PROD,
    password: process.env.PASSWORD_PROD,
    database: process.env.DATABASE_PROD,
    host: process.env.HOST_PROD,
    dialect: "postgres",
  },
};

// module.exports = config

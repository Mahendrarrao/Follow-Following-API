module.exports = {
  HOST: "followersdb-connections.cj5usbqunron.us-east-2.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "admin_access",
  DB: "followers_db",
  PORT: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Changes to be made : Add RDS_PORT creds (ln 2-6)
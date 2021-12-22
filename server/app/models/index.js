const dbConfig = require("../config/db.config.js");

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
    username: {
      type: Sequelize.STRING
    },
    followers: {
      type: Sequelize.JSON
    }
  });

  return Profile;
};

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

/* async function prepare(sequelize) {
  return new Promise(res => {
    sequelize.beforeConnect(config => res(config));
  });
} */

db.profiles = require("./profile.model.js")(sequelize, Sequelize);

module.exports = db;
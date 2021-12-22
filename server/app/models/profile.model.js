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
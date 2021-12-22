var db = require("../models");
const Profile = db.userprofiles;
const Op = db.Sequelize.Op;

// Create and Save a new Profile
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Profile
  const profile = {
    username: req.body.username,
    followers: req.body.followers,
  };

  // Save Tutorial in the database
  Profile.create(profile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Profiles from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Profile with an id
exports.findOne = (req, res) => {
  
};

// Update a Profile by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Profile with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Profiles from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Profiles
exports.findAllPublished = (req, res) => {
  
};
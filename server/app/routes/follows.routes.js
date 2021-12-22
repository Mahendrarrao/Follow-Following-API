module.exports = app => {
    const follows = require("../controller/follows.controller.js");

    const router = require("express").Router();

    // Retrieve all persons who are followed
    router.get("/following/:email", follows.findFollowed);

    // Retrieve all followers
    router.get("/followers/:email", follows.findFollowers);

    // Check whether the person is being followed
    router.get("/is_following", follows.isFollowing);

    app.use('/api/follows', router);
};

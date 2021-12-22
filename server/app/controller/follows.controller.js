const dbConnection = require("../../connection");

exports.findFollowed = async (req, res) => {
    const email = req.params.email;
    const query = 'SELECT `followed_email` from `test_app_control` where `follower_email` = ?';

    dbConnection.query(query, email, function (error, rows) {
        if (error)
            return res.json({ error });
        else {
            rows = rows.map(row => row.followed_email);
            return res.json({ following: rows });
        }
    });
};

exports.findFollowers = (req, res) => {
    const email = req.params.email;
    const query = 'SELECT `follower_email` from `test_app_control` where `followed_email` = ?';

    dbConnection.query(query, email, function (error, rows) {
        if (error)
            return res.json({ error });
        else {
            rows = rows.map(row => row.follower_email);
            return res.json({ followers: rows });
        }
    });
};

exports.isFollowing = (req, res) => {
    const query = 'select `id` from `test_app_control` where `followed_email` = ? and `follower_email` = ?';
    const followed = req.query.followed;
    const follower = req.query.follower;
    console.log(`follower: ${follower}, followed: ${followed}`);
    if (!followed)
        return res.json({
            error: 'Both follower and followed must be specified',
            follower,
            followed,
            usage: `/api/follows/is_following?follower=<follower_email>&followed=<followed_email>`
        });
    if (!follower)
        return res.status(302).json({
            redirected: 'Please sign in first'
        });
    dbConnection.query(query, [followed, follower], function (error, rows) {
        if (error)
            return res.json({ error });
        else {
            const is_following = (rows.length === 1);
            return res.json({ is_following });
        }
    });
};


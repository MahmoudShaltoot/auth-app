const {User, validate} = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user = await user.save();
    res.send(user);
})

module.exports = router;
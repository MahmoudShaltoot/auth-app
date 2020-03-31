const bcrypt = require("bcryptjs");
const _ = require("lodash");
const auth = require("../middleware/auth");
const {User, validate} = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/me", auth, async(req, res) => {
    const user = await User.findOne({ _id: req.user._id }).select('-password');
    res.send(user);
})

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('User already registerd');

    user = new User(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt); 
    
    user = await user.save();

    res.send(_.pick (user, ["_id", "name", "email"]));
})

module.exports = router;
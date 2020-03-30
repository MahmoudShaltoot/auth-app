const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 50
    },
    email: {
        type: String,
        require: true,
        min: 5,
        max: 255
    },
    password: {
        type: String,
        require: true,
        min: 5,
        max: 255
    },
})

const User = mongoose.model("User", userSchema);

exports.User = User;

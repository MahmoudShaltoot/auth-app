const mongoose = require("mongoose");
const Joi = require("joi");

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

function validateUser (user) {
    const schema = {
        name: Joi.string().min(3).max(255).require(),
        username: Joi.email().min(5).max(255).require(),
        password: Joi.string().min(5).max(255).require()
    }

    return Joi.validate(user, schema);
} 

exports.User = User;
exports.validate = validateUser;
const config = require("config");
const jwt = require("jsonwebtoken");
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

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model("User", userSchema);

function validateUser (user) {
    const schema = {
        name: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(user, schema);
} 

exports.User = User;
exports.validate = validateUser;
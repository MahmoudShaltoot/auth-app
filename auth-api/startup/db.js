const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://localhost/auth-db')
    .then(() => console.log("Connected to MongoDb..."))
    .catch(err => console.log("couldn't connect to MongoDb..."))
}
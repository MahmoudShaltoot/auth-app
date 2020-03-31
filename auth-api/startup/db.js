const config = require("config");
const mongoose = require("mongoose");

module.exports = () => {
    const db = config.get('db');
    
    mongoose.connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch(err => console.log("couldn't connect to MongoDb..."))
}
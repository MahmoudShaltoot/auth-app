const config = require("config");
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth.js");
const express = require("express");
const app = express();

mongoose.connect('mongodb://localhost/auth-db')
.then(() => console.log("Connected to MongoDb..."))
.catch(err => console.log("couldn't connect to MongoDb..."))

if(!config.get('jwtPrivateKey')) {
    console.log("ERROR : jwtPrivateKey is not defined.");
    process.exit(1);
}

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(3900, console.log("connected to server on port 3900"));
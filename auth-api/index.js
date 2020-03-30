const mongoose = require("mongoose");
const users = require("./routes/users");
const express = require("express");
const app = express();

mongoose.connect('mongodb://localhost/auth-db')
.then(() => console.log("Connected to MongoDb..."))
.catch(err => console.log("couldn't connect to MongoDb..."))

app.use(express.json());
app.use('/api/users', users);

app.listen(3900, console.log("connected to server on port 3900"));
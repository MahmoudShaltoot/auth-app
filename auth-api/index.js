const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3900, console.log("connected to server on port 3900"));
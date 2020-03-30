const users = require("./routes/users");
const express = require("express");
const app = express();

app.use(express.json());
app.use('/api/users', users);

app.listen(3900, console.log("connected to server on port 3900"));
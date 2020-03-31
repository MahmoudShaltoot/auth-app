const config = require("config");
const express = require("express");
const app = express();

require("./startup/validate")();
require("./startup/db")();
require("./startup/routes")(app);

const PORT = process.env.PORT || config.get("port");

app.listen(PORT, console.log(`Connected to server on port ${PORT}`));
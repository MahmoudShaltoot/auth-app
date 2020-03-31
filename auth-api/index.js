const express = require("express");
const app = express();

require("./startup/validate")();
require("./startup/db")();
require("./startup/routes")(app);

app.listen(3900, console.log("connected to server on port 3900"));
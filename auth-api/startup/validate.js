const config = require("config");

// run in terminal window "set app_jwtPrivateKey=secret-jwt"
module.exports = () => {
  if (!config.get("jwtPrivateKey")) {
    console.log("ERROR : jwtPrivateKey is not defined.");
    process.exit(1);
  }
};

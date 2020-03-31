const config = require("config");

module.exports = () => {
    if(!config.get('jwtPrivateKey')) {
        console.log("ERROR : jwtPrivateKey is not defined.");
        process.exit(1);
    }    
}
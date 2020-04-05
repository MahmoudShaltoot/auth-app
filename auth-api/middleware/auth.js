const jwt = require("jsonwebtoken");
const config = require("config");

module.exports =  (req, res, next) => {
    let token = req.header('Authorization');
    token = token.split(" ")[1]; 
    if(!token) return res.status(401).send('Access denied. no token provided');

    try {   
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } catch (ex) {
        return res.status(400).send('Invalid token')
    }
}


const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
    return jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60s'})
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.send(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) =>{
        if(error) {
            return res.status(401)
        }
        req.user = user;
        next();
    })
}

module.exports = {verifyToken, generateAccessToken}
const bcrypt = require('bcrypt')
const saltRounds = 10
const User = require('../models/user')
const validator = require('validator')
const {generateAccessToken} = require('../services/tokenService')

const createUser = async (req, res) => {
    if (validator.isStrongPassword(req.body.password)){
        try {
            const hash = await bcrypt.hash(req.body.password, saltRounds);
            let user = new User({
                name: req.body.name,
                age: req.body.age,
                salary: req.body.salary,
                password: hash
            });
            await user.save();
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    } else return res.status(400).send('mot de passe non sécurisé')

}

const loginUser = (req, res) => {
    User.findOne({ name: req.body.name })
        .then((user) => {
            if (!user) {
                return res.status(401).send("Nom non trouvé");
            }
            bcrypt.compare(req.body.password, user.password)
                .then((ok) => {
                if (ok) {
                    const accessToken = generateAccessToken(user);
                    return res.send({ user, accessToken });
                } else {
                    return res.status(401).send("Le mot de passe est invalide");
                }
            });
        })
        .catch((error) => {
            return res.status(400).send(error);
        });
};

module.exports = {
    createUser,
    loginUser
};

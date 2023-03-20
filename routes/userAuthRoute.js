const express = require('express');
const router = express.Router();
const userService = require('../services/usersService');
const {loginUser} = require("../services/usersService");


// route pour ajouter un user via signup
router.route('/signup')
    .post(userService.createUser);

// route pour s'identifier
router.route('/login')
    .post(userService.loginUser);


// export des routes contenues dans le routeur
module.exports = router;
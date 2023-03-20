const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const {verifyToken} = require('../../services/tokenService')

// route : localhost:port/api/users
router.route("/users")
    .get(/*verifyToken, */(req, res) => {
        // récupère tous les objets
        User.find()
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).json(error))
    });

// route : localhost:port/api/
router.route("/users/:id")
    .get(/*verifyToken,*/(req,res) => {
        User.findOne({_id: req.params.id})
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).json(error))
    })
    .put(verifyToken,(req,res) => {
        User.updateOne({_id: req.params.id}, req.body)
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).json(error))
    })
    .delete(verifyToken,(req,res) => {
        User.deleteOne({_id: req.params.id})
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).json(error))
    })

// route pour ajouter un user
router.route('/users')
    .post(verifyToken,(req, res) => {
        let user = new User(req.body);
        user.save()
            .then((data) => res.status(201).json(data))
            .catch((error) => res.status(400).json(error))
    })


// export des routes contenues dans le routeur
module.exports = router;
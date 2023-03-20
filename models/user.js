const mongoose = require('mongoose');

// creation d'un schema qui génère un objet
const userSchema = mongoose.Schema({
    name: { type: String},
    age: { type: String},
    salary: { type: String},
    password: { type: String}
});

// exportation du modèle qu'on appelle 'User'
module.exports = mongoose.model('User', userSchema);
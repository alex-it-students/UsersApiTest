const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.set('strictQuery', true);

// charge le fichier contenant les variables d'environnement
dotenv.config();

const loader = mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connection to MongoDB has succeeded !'))
    .catch(() => console.log('Connection to MongoDB has failed !'));

module.exports = loader;

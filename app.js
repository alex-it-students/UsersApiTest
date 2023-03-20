const express = require('express');
const usersApiRoute = require('./routes/api/usersApiRoute')
const userAuthRoute = require('./routes/userAuthRoute')
const loader = require('./loaders/loader')
const middleware = require('./middleware/middleware');

// on instancie l'application express
const app = new express();

middleware(app)

// Indique l'url de départ des routes pour contactApiRoute
app.use("/routes/api", usersApiRoute);
app.use("/routes/", userAuthRoute);

app.listen(8090, () => {
    console.log('Express is running on port: 8090');
});
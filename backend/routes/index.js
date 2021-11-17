const routerUsers = require('./usersRouter.js');


// Método para consumir las rutas

function RoutesAPI(app) {
    app.use('/users', routerUsers);
}


module.exports = RoutesAPI;
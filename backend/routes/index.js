const routerUsers = require('./usersRouter.js');
const routerMeds = require('./medsRouter.js');
// const routerSuperUser = require('./superUserRouter.js');
const routerAppointments = require('./appointmentsRouter.js');


// Método para consumir las rutas

function RoutesAPI(app) {
    app.use('/users', routerUsers);
    app.use('/meds', routerMeds);
    // app.use('/superuser', routerSuperUser);
    app.use('/appointments', routerAppointments);
}


module.exports = RoutesAPI;
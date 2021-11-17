// Conexión a la base de datos

const admin = require('firebase-admin');

const serviceAccount = require('./b43---1---consultorio-5ef7a9213bcf.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
const db = require('./firebase.js');

// ----- USUARIOS -----

// Obtener el usuario
function getUser(uid, callback) {
    return db.collection('users').doc(uid).get()
        .then((refDoc)=>{
            if (refDoc.exists) {
                callback(refDoc.data());
            }
        })
        .catch((err)=>{
            console.error('Error to get user',err);
            callback('Error to get user',err);
        })
}

// Añadir Usuarios
function addUser(user, callback) {
    return db.collection('users').add(user)
        .then(()=>{
            callback('Success to create an user');
        })
        .catch((err)=>{
            console.error('Error to add user',err);
            callback('Error to add user',err);
        })
}

// Actualizar usuarios set()
function replaceUser(uid, user, callback) {
    return db.collection('users').doc(uid).set(user)
        .then(()=>{
            callback('Success to update replacing an user');
        })
        .catch((err)=>{
            console.error('Error to replace user',err);
            callback('Error to replace user',err);
        })
}

// Eliminar usuario
function deleteUser(uid, callback) {
    return db.collection('users').doc(uid).delete()
        .then(()=>{
            callback('Success to delete an user');
        })
        .catch((err)=>{
            console.error('Error to delete user',err);
            callback('Error to delete user',err);
        })
}


// ------ MEDICO ------

// Obtener el medico
function getMed(mid, callback) {
    return db.collection('meds').doc(mid).get()
        .then((refDoc)=>{
            if (refDoc.exists) {
                callback(refDoc.data());
            }
        })
        .catch((err)=>{
            console.error('Error to get med',err);
            callback('Error to get med',err);
        })
}

// Añadir Medicos
function addMed(med, callback) {
    return db.collection('meds').add(med)
        .then(()=>{
            callback('Success to create a med');
        })
        .catch((err)=>{
            console.error('Error to add med',err);
            callback('Error to add med',err);
        })
}

// Actualizar medico set()
function replaceMed(mid, med, callback) {
    return db.collection('meds').doc(mid).set(med)
        .then(()=>{
            callback('Success to update replacing a med');
        })
        .catch((err)=>{
            console.error('Error to replace med',err);
            callback('Error to replace med',err);
        })
}

// Eliminar medico
function deleteMed(mid, callback) {
    return db.collection('meds').doc(mid).delete()
        .then(()=>{
            callback('Success to delete a med');
        })
        .catch((err)=>{
            console.error('Error to delete med',err);
            callback('Error to delete med',err);
        })
}


// ------ CITA ------

// Obtener la cita
function getAppointment(aid, callback) {
    return db.collection('appointment').doc(aid).get()
        .then((refDoc)=>{
            if (refDoc.exists) {
                callback(refDoc.data());
            }
        })
        .catch((err)=>{
            console.error('Error to get medical appointment',err);
            callback('Error to get medical appointment',err);
        })
}

// Añadir Medicos
function addAppointment(appointment, callback) {
    return db.collection('appointment').add(appointment)
        .then(()=>{
            callback('Success to create a medical appointment');
        })
        .catch((err)=>{
            console.error('Error to add medical appointment',err);
            callback('Error to add medical appointment',err);
        })
}

// Actualizar medico set()
function replaceAppointment(aid, appointment, callback) {
    return db.collection('appointment').doc(aid).set(appointment)
        .then(()=>{
            callback('Success to update replacing medical appointment');
        })
        .catch((err)=>{
            console.error('Error to replace medical appointment',err);
            callback('Error to replace medical appointment',err);
        })
}

// Eliminar medico
function deleteAppointment(aid, callback) {
    return db.collection('appointment').doc(aid).delete()
        .then(()=>{
            callback('Success to delete the medical appointment');
        })
        .catch((err)=>{
            console.error('Error to delete medical appointment',err);
            callback('Error to delete medical appointment',err);
        })
}


module.exports = {
    getUser,
    addUser,
    replaceUser,
    deleteUser,
    getMed,
    addMed,
    replaceMed,
    deleteMed,
    getAppointment,
    addAppointment,
    replaceAppointment,
    deleteAppointment
}
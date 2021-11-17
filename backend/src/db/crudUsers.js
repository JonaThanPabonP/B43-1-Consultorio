const db = require('./firebase.js');

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

module.exports = {
    getUser,
    addUser,
    replaceUser,
    deleteUser
}
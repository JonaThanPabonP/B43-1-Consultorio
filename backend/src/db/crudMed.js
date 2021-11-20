const db = require('./firebase.js');

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
            callback('Success to create an med');
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
            callback('Success to update replacing an med');
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
            callback('Success to delete an med');
        })
        .catch((err)=>{
            console.error('Error to delete med',err);
            callback('Error to delete med',err);
        })
}

module.exports = {
    getMed,
    addMed,
    replaceMed,
    deleteMed
}
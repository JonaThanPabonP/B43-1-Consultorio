const db = require("./firebase.js");

// ------ CITA ------

// Obtener la cita
function getAppointment(aid, callback) {
  return db
    .collection("appointment")
    .doc(aid)
    .get()
    .then((refDoc) => {
      if (refDoc.exists) {
        callback(refDoc.data());
      }
    })
    .catch((err) => {
      console.error("Error to get medical appointment", err);
      callback("Error to get medical appointment", err);
    });
}

function getAllAppointments(callback) {
  return db
    .collection("appointment")
    .get()
    .then((refDoc) => {
      var arrayAppointments = [];
      refDoc.forEach((doc) => {
        console.log(doc.id, "=>", doc.data);
        arrayAppointments.push(doc.data());
      });
      callback(arrayAppointments);
    })
    .catch((err) => {
      console.error("Error to get medical appointment", err);
      callback("Error to get medical appointment", err);
    });
}

// Añadir cita
function addAppointment(appointment, callback) {
  return db
    .collection("appointment")
    .add(appointment)
    .then(() => {
      callback("Success to create a medical appointment");
    })
    .catch((err) => {
      console.error("Error to add medical appointment", err);
      callback("Error to add medical appointment", err);
    });
}

// Actualizar cita set()
function replaceAppointment(aid, appointment, callback) {
  return db
    .collection("appointment")
    .doc(aid)
    .set(appointment)
    .then(() => {
      callback("Success to update replacing medical appointment");
    })
    .catch((err) => {
      console.error("Error to replace medical appointment", err);
      callback("Error to replace medical appointment", err);
    });
}

// Eliminar cita
function deleteAppointment(aid, callback) {
  return db
    .collection("appointment")
    .doc(aid)
    .delete()
    .then(() => {
      callback("Success to delete the medical appointment");
    })
    .catch((err) => {
      console.error("Error to delete medical appointment", err);
      callback("Error to delete medical appointment", err);
    });
}

// Buscar filtrado citas por fecha
function searchAppoByDate(fecha, callback) {
  const fec = Timestamp.fromDate(new Date(fecha));

  return db
    .collection("appointment")
    .where("fecha", "==", fec)
    .get()
    .then((refDoc) => {
      var arrayAppointments = [];
      refDoc.forEach((doc) => {
        arrayAppointments.push(doc.data());
      });
      callback(arrayAppointments);
    })
    .catch((err) => {
      console.error("Error to find experts", err);
      callback("Error to find experts", err);
    });
}
// Buscar filtrado citas por usuario
function searchAppoByUser(usuario, callback) {
  return db
    .collection("appointment")
    .where("paciente", "==", usuario)
    .get()
    .then((refDoc) => {
      var arrayAppointments = [];
      refDoc.forEach((doc) => {
        arrayAppointments.push(doc.data());
      });
      callback(arrayAppointments);
    })
    .catch((err) => {
      console.error("Error to find experts", err);
      callback("Error to find experts", err);
    });
}

module.exports = {
  getAppointment,
  getAllAppointments,
  addAppointment,
  replaceAppointment,
  deleteAppointment,
  searchAppoByDate,
  searchAppoByUser,
};

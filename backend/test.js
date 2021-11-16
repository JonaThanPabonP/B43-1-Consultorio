const db = require('./index.js');


// Agregar datos
db.collection("users").add({
    first: "Jonathan",
    last: "Pabon",
    born: 1995
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
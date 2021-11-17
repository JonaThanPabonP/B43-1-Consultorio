const express = require('express');
const dbU = require('../src/db/crudUsers.js');
const router = express.Router();

// *************** USERS ****************

// Método GET
router.get('/:id', (req,res)=>{
    const uid = req.params.id;
    dbU.getUser(uid, function(doc){
        res.send(doc);
    })
})


// Método POST
router.post('/', (req,res)=>{
    const user = req.body;
    dbU.addUser(user, function(response){
        res.send(response);
    })
})


// Método PUT
router.put('/:id', (req,res)=>{
    const user = req.body;
    const uid = req.params.id;
    dbU.replaceUser(uid, user, function(response){
        res.send(response);
    })
})


// Método DELETE
router.delete('/:id', (req,res)=>{
    const uid = req.params.id;
    dbU.deleteUser(uid, function(response){
        res.send(response);
    })
})

// ************** END USERS ****************


module.exports = router;
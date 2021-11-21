const express = require('express');
const dbA = require('../src/db/crudAppointment.js');
const router = express.Router();

// *************** APPOINTMENTS ****************

// Método GET
router.get('/:id', (req,res)=>{
    const aid = req.params.id;
    dbU.getUser(aid, function(doc){
        res.send(doc);
    })
})


// Método POST
router.post('/', (req,res)=>{
    const appo = req.body;
    dbU.addUser(appo, function(response){
        res.send(response);
    })
})


// Método PUT
router.put('/:id', (req,res)=>{
    const appo = req.body;
    const aid = req.params.id;
    dbU.replaceUser(aid, appo, function(response){
        res.send(response);
    })
})


// Método DELETE
router.delete('/:id', (req,res)=>{
    const aid = req.params.id;
    dbU.deleteUser(aid, function(response){
        res.send(response);
    })
})

// ************** END APPOINTMENTS ****************


module.exports = router;
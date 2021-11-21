const express = require('express');
const dbM = require('../src/db/crudMed.js');
const router = express.Router();

// *************** MEDS ****************

// Método GET
router.get('/:id', (req,res)=>{
    const mid = req.params.id;
    dbU.getUser(mid, function(doc){
        res.send(doc);
    })
})


// Método POST
router.post('/', (req,res)=>{
    const med = req.body;
    dbU.addUser(med, function(response){
        res.send(response);
    })
})


// Método PUT
router.put('/:id', (req,res)=>{
    const med = req.body;
    const mid = req.params.id;
    dbU.replaceUser(mid, med, function(response){
        res.send(response);
    })
})


// Método DELETE
router.delete('/:id', (req,res)=>{
    const mid = req.params.id;
    dbU.deleteUser(mid, function(response){
        res.send(response);
    })
})

// ************** END MEDS ****************


module.exports = router;
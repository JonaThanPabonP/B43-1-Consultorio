const express = require('express');
const dbA = require('../src/db/crudAppointment.js');
const router = express.Router();

// *************** APPOINTMENTS ****************

// Método GET
// Obtener cita por id
router.get('/:id', (req,res)=>{
    const aid = req.params.aid;
    dbA.getAppointment(aid, function(doc){
        res.send(doc);
    })
})

// Obtener listado de citas
router.get('/', (req,res)=>{
    dbA.getAllAppointments(function (arrayAppointments){
        res.send(arrayAppointments);
    });
})
// Obtener listado de citas por fecha
router.get('/searchdate/:fecha', (req,res)=>{
    const fecha = req.params.fecha;
    dbA.searchAppoByDate(fecha, function (arrayAppointments){
        res.send(arrayAppointments);
    })
})
// Obtener listado de citas por usuario(id)
router.get('/searchuser/:paciente', (req,res)=>{
    const paciente = req.params.paciente;
    dbA.searchAppoByUser(paciente, function (arrayAppointments){
        res.send(arrayAppointments);
    })
})


// Método POST
router.post('/', (req,res)=>{
    const appo = req.body;
    dbA.addAppointment(appo, function(response){
        res.send(response);
    })
})


// Método PUT
router.put('/:id', (req,res)=>{
    const appo = req.body;
    const aid = req.params.id;
    dbA.replaceAppointment(aid, appo, function(response){
        res.send(response);
    })
})


// Método DELETE
router.delete('/:id', (req,res)=>{
    const aid = req.params.id;
    dbA.deleteAppointment(aid, function(response){
        res.send(response);
    })
})

// ************** END APPOINTMENTS ****************


module.exports = router;
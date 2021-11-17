const routerAPI = require('./routes');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());


routerAPI(app);


app.listen(port, ()=>{
    console.log('My port is listening:', port);
});
const routerAPI = require('./routes');
const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());


routerAPI(app);


app.listen(port, ()=>{
    console.log('My port is listening:', port);
});
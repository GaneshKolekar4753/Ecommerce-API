//importing required packages
const express=require('express');
const port=7000;
const bodyParser=require('body-parser');
//use mongodb 
const db=require('./config/mongoose');

//initilize express
const app=express();


// // // using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));
// // app.use(express.json());
// app.use(express.urlencoded());

//use express router
app.use('/',require('./routes/index'));

//start server on port
app.listen(port,function(err){
    if(err){
        console.log("server is not up:",err);
    }
    console.log('server is up on port',port);
});
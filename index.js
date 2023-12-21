const express=require('express');
const port=7000;

const app=express();


app.listen(port,function(err){
    if(err){
        console.log("server is not up:",err);
    }
    console.log('server is up on port',port);
});
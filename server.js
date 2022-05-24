const express = require('express')
const app=express()
const fs=require('fs')


fs.readFile('./data.json', 'utf-8',(err,data)=>{
    if(!err){
      app.get('/',(req,res)=>{
      res.send(data)  
    })}
    else console.error(err);

});



const PORT=3000
app.listen(3000,(error)=>{
    if(!error){
        console.log(`Server is running on the port ${PORT}`)
    }
    else console.log("ERROR HAPPENED")
})
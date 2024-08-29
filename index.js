const express= require('express')
const app =express();
const http=require('http');
const expressServer= http.createServer(app);
app.get("/",function(req,res){
    res.send(__dirname+"/index.html");
})

expressServer.listen(3000,function(){
    console.log("server run @3000")
})
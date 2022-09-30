var express=require("express")
var app=express()
app.get("/hello",function (req,res) {
    res.json("Hello anh dương nhá")
})


var service=app.listen(8081,function (host,port) {
    host=service.address().address
    var port=service.address().port
    console.log("Susscess nhé nah dương",host,port);
})
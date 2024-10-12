const express=require('express')
const bodyparser = require('body-parser');
const app=express()
app.use(bodyparser.urlencoded({extended:true}))
const port = 3001
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/calculator.html")
})
app.post('/',(req,res)=>{
var num1=Number(req.body.num1)
var num2=Number(req.body.num2)
var result=num1+num2   
    res.send(`results are`+result)
})
app.listen(port,()=>{
    console.log(`current portal is ${port}`)
})

const express = require('express');
const bodyparser = require('body-parser');
const app=express()
const port=3002
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/bmicalculator.html')
})
app.post('/',(req,res)=>{
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2)
    var result=num1/(num2*num2)
    // console.log( `results are`+result)
    res.send(`bmi are`+result)
})

app.listen(port,()=>{
    console.log(`current port ${port}`)
})
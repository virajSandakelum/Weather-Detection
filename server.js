const express = require("express")
const app = express()


app.get('/',(req,res) =>{
    res.send('<h1>Welcome</h1>')
})

app.get('*',(req,res)=>{
    res.send("Page is not found")
})

app.listen(3000,() => console.log("Server port is 3000 "))
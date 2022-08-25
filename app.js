const express = require("express")
const weather = require('./utils/weather')
const geo = require('./utils/geo')

const app = express()

app.get('/',(req,res) => {
    res.send("<h1>Welcome</h1>")
})

app.get('/weather',(req,rse) => {
    if(!req.query.address)
    {
        res.send("address not found!")
    }

    geo(req.query.address)
    .then((data) => {
        console.log(data)
        return weather(data.lat,data.lon)
    
    })
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        res.send(error)
    })
})

app.get('*',(req,res) => {
    res.send("Page is not found!")
})


app.listen(3000,()=>console.log("Running the 3000 Port"))
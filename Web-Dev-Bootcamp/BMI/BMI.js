const express = require("express")
const app = express()
const bodyParser = require("body-parser")

var channel = 1000
app.listen(channel, function () {
    console.log(`channel ${channel} started ...`)
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/BMI.html")
})

app.post("/", function (req, res) {
    var w = Number(req.body.weight)
    var h = Number(req.body.height)
    var bmi = (w / Math.pow(h, 2)).toFixed(2)
    res.send(`your bmi is ${bmi}`)
})
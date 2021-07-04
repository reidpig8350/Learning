const express = require("express")
const bodyParser = require("body-parser")

const app = express()

var today = new Date()
var currentDay = today.getDay()

app.listen(3000, function () {
    console.log("It's running on 3000")
})

app.get("/", function (req, res) {
    res.write(currentDay)
    res.send()
})

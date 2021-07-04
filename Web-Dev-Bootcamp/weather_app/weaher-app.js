const express = require("express")
const app = express()
const https = require("https")
const bodyParser = require("body-parser")

app.listen(2000, function () {
    console.log("channel 2000")
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    var appKey = "35227d73038ee024fceaf43f591a895f"
    var cityName = req.body.cityName
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appKey}`
    res.sendFile(`It's `)
})
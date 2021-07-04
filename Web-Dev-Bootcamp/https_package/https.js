const https = require("https")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.listen(2000, function () {
    console.log("channel 2000")
})
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/", function (req, res) {
    var cityName = req.body.cityName
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=35227d73038ee024fceaf43f591a895f`
    https.get(weatherUrl, function (response) {
        response.on("data", function (data) {
            var weatherState = JSON.parse(data)
            var weatherDescription = weatherState.weather[0].description
            var weatherIcon = weatherState.weather[0].icon
            res.write(`<h1>The weather in ${cityName} is now ${weatherDescription}.</h1>`)
            res.send()
        })
    })
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "\\https.html")
})


// https.get(weatherUrl, function (response) {
//     response.on("data", function (data) {
//         const weatherDetail = JSON.parse(data)
//         const weatherDescription = weatherDetail.weather[0].description
//         const weatherTemperature = weatherDetail.main.temp
//         const weatherIcon = weatherDetail.weather[0].icon
//         const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`

//         res.write(`<h1>The weather is ${weatherDescription} in Taipei City now.</h1>`)
//         res.write(`<h1>It's ${weatherTemperature} Degrees Celcius.</h1>`)
//         res.write("<img src='" + weatherIconUrl + "' alt='weatherState'>\n\n")
//     })
// })
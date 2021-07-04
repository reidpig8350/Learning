const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(2000, function () {
    console.log("Channel 2000 started...")
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/calculator.html")

})

app.post("/", function (req, res) {
    var number1 = Number(req.body.n1)
    var number2 = Number(req.body.n2)
    var result = number1 + number2
    res.send(`The answer is ${result}`)
})
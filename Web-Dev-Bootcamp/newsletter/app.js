const express = require("express")
const app = express()
const request = require("request")
const bodyParser = require("body-parser")
const https = require("https")

app.use(express.static("static"))
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/signup", function (req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const emailAddress = req.body.emailAddress
    res.sendFile(__dirname + "/success.html")
})

app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html")
})
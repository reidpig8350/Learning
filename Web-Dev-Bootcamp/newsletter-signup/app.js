const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const request = require("request")

app.use(express.static("static"))
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/signup", function (req, res) {
    var firstName = req.body.fName
    var lastName = req.body.lName
    var emailAddress = req.body.emailAddress
    console.log(firstName, lastName, emailAddress)
    res.sendFile(__dirname + "\\success.html")
})


app.listen(3000, function () {
    console.log("Server us running on port 3000.")
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "\\signup.html")
})

// 85e30ade22e0326b1646eb0d326d2f7d-us7
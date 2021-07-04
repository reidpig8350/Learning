const express = require("express")
const app = express();


app.get("/", function (res, req) {
    req.send("<h1>Enter two numbers below</h1>")
})

app.get("/about", function (res, req) {
    req.send("are you happy now?")
})

app.get("/calculator", function (res, req) {
    var calculator =
        req.send("calculator.html")
})


app.listen(2999, function () {
    console.log("Server started on port 2999")
})
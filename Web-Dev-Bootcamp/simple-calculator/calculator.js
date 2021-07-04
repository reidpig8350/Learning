const express = require("express")
const app = express();





app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1><input type='text'><span>   </span><input type='text'>")
})

app.listen(2000, function () {
    console.log("chaanel 2000 started")
})
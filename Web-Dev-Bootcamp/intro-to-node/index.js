//jshint version:6

const express = require("express")

const app = express();

app.listen(2999, function () {
    console.log("Server started on port 2999")
})
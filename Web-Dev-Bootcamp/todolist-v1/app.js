const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//處理server基本運作
app.listen(3000, function () {
    console.log("It's running on 3000")
});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));


//處理表單邏輯
var itemList = [];
var workItemList = [];

app.get("/", function (req, res) {
    res.render("list", {
        itemList: itemList,
        pageLocation: "homeRoute",
        pageTitle: "首頁"
    })
});

app.post("/newItem", function (req, res) {
    console.log(req.body.title)
    if (req.body.summitBtn === "homeRoute") {
        let newItem = req.body.title;
        itemList.push(newItem);
        res.redirect("/");
    } else if (req.body.summitBtn === "workRoute") {
        let newItem = req.body.title;
        workItemList.push(newItem);
        res.redirect("/work");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {
        itemList: workItemList,
        pageLocation: "workRoute",
        pageTitle: "工作清單"
    })
})
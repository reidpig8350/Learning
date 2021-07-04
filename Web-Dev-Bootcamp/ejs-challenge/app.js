//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const lowerCase = require("lodash/lowerCase");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
let blog = [{
  title: "hello",
  content: "When I was little, my church Black History Month programs usually involved us wearing our version of what we thought African dress looked like, and reciting poems by Paul Lawrence Dunbar or Gwendolyn Brooks. We would make buttons that declared “I Am Somebody,” that statement first made popular in the ’80s by Rev. Jesse Jackson. And we — no, I — believe it."
  ,
}, {
  title: "hey",
  content: "I’ll never forget the first time somebody told me I was a dark and worthless nobody and had no value due to the color of my skin. And in my little eight year old voice with my little scrawny eight year old arms, I put my hands on my scrawny hips and told that grown White person: “But that’s not what Jesse Jackson said! And that’s not what Rev. Woolfolk said. And that’s not what my Daddy said. I AM somebody and don’t you forget it.n",
}, {
  title: "how",
  content: "Those Black History facts and Black history teachings and poetry recitations got etched into my soul. The church elders all sitting in the front row, encouraging me and pouring into me. Blessing me with God Bless that Baby and That baby Sure is Smart and That Baby Sure is Going Places and That Baby Sure is Her Daddy’s Daughter. That stuff? I heard it and it stuck. Paired with the pride with which I learned my Black facts, those words got locked into my chest and became a shield against all the negative comments lobbied at me later for the rest of my life.",
}
];

app.get("/", function (req, res) {
  let pageTitle = "Home";
  res.render("home", {
    pageTitle: pageTitle,
    paragraph: homeStartingContent,
    posts: blog,
    pathName: "/"
  });
});

app.get("/about", function (req, res) {
  let pageTitle = "About";
  res.render("home", {
    pageTitle: pageTitle,
    paragraph: aboutContent,
    posts: blog,
    pathName: ""
  });
});

app.get("/contact", function (req, res) {
  let pageTitle = "Contact";
  res.render("home", {
    pageTitle: pageTitle,
    paragraph: contactContent,
    posts: blog,
    pathName: ""
  });
});

app.get("/compose", function (req, res) {
  res.render("compose")
})


app.post("/composePost", function (req, res) {

  let article = {
    title: req.body.articleTitle,
    content: req.body.articleContent
  }
  blog.push(article)
  res.redirect("/compose")
})

app.get("/posts", function (req, res) {
  res.render("post", {
    posts: blog
  })
})

app.get('/posts/:postPath', function (req, res) {

  postPathCompare = (req.params.postPath).toLowerCase().replace(/-/g, "");
  blog.forEach(function (postID) {
    postID.title = (postID.title).toLowerCase().replace(/-/g, "");

    if (postID.title === postPathCompare) {
      res.render("post", {
        pageH1: postID.title,
        pageP: postID.content,
      })
    }
  })
})
// Allows for use of Express
var express = require("express");

// Allows for use of Heroku
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allows for use of handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Calls controller
var routes = require("./controllers/foodTruck_controller.js");

app.use(routes);

// Server listens for requests
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

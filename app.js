const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var itema = ["BOOK", "MILK", "FOOD"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const currentDate = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  res.render("index", { newListItems: itema, currentDate: formattedDate });
});

app.post("/", function (req, res) {
  var item = req.body.newitem.trim(); // Trim whitespace from input

  if (item !== "") { // Check if item is not empty
    itema.push(item);
  }

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

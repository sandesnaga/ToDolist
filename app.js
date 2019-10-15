const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
var items = ["buy food", "cook food", "eat food"];

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day, newItems: items
  });
});
app.post("/", function(req,res){
  item = req.body.newitem;
  items.push(item);
  res.redirect("/");
})


app.listen(3000, function() {
  console.log("listening on port 3000");
})

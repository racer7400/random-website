var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");
    //mongoose   = require("mongoose");

//mongoose.connect("mongodb://localhost/mywebpage");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//root route
app.get("/", function(req, res){
    res.render("landing");
});

//Server Start
app.listen(3000, function(){
   console.log("YelpCamp server is listening!!!"); 
});
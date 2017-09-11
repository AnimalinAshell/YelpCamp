var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Death Valley", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Nelson Ledges", image: "https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg"},
        {name: "Kong Creek", image: "https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"},
        {name: "Death Valley", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Nelson Ledges", image: "https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg"},
        {name: "Kong Creek", image: "https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"},
        {name: "Death Valley", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Nelson Ledges", image: "https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg"},
        {name: "Kong Creek", image: "https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"}
        
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
})

app.post("/campgrounds", function(req, res) {
    // get data from form and add to array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground);
    
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
    
})

app.get("/campgrounds/new", function(req,res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("YelpCamp has started");
});
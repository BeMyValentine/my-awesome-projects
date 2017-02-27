var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 9002;
var mongoose = require("mongoose");
var Target = require("./models/targets");
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));


mongoose.connect("mongodb://localhost/target", function (err) {
    if (err) throw err;

    console.log("Connected to the database!");
});

app.use(bodyParser.json());
app.use("/target", require("./routes/target-routes"));




app.listen(port, function () {
    console.log("Server " + port + " reporting for duty");

});
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { timeStamp } = require("console");
const { CONNREFUSED } = require("dns");


// Trip Page Sentences

// Kashmir

const kashmirtrip = {
  duration: "14 Days",
  age: "18+"
}

// const duration = "14 Days";
// const age = "18+";
const month = "Aug";
const avilable = "Availability 36";


const day0 = "Day 0 : Departure From Delhi";
const day01= "We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.";
const day02= "Pit Stop in between for Dinner (not on us) at around 11 PM.";

const day1 = "Day 1- Reach Gupkashi";
const day11 = "Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)";
const day12 = "We will Reach Guptkashi by noon.";
const day13 = "On arrival at Guptkashi check-in hotel. Rest of the day at leisure";

const day2 = "Day 2: Sonprayag-Kedarnath";
const day21= "Early morning (5 AM) after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath.";
const day22= "On arrival check in at the hotel. Freshen-up and proceed for Darshan. Take part in evening Aarti.";
const day23= "Dinner and Overnight at hotel.";

const cost= "₹29,999";









const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", );
})

app.get("/:tripName", function(req, res){
  const tripName = req.params.tripName;
  res.render("trip",{
    tripName: tripName, 
    duration: `${tripName}.duration()`, 
    age: `${tripName}.age()`, 
    month: month, 
    avilable: avilable,
    day0:day0,
    day01:day01,
    day02:day02,
    day1:day1,
    day11:day11,
    day12:day12,
    day13:day13,
    day2:day2,
    day21:day21,
    day22:day22,
    day23:day23,
    cost: cost})
});





app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
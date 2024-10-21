var express = require("express");
var app = express();
var path = require('path');
const axios = require('axios');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"/public")));


app.get("/", (req,res) => {
    res.render("main", {});
});


app.post('/sendClick', (req, res) => {
    console.log("clicked");
    turnLedOn();
    res.json({ status: 'success', message: 'LED turned ON'});
});

// Function to turn LED ON
async function turnLedOn() {
  try {
    await axios.get('https://localhost:3000/LED_ON');
    
  } catch (error) {
    console.error('Error turning LED on:', error);
  }
}

let port = 8001;
let ip = "0.0.0.0";

let server = app.listen(port,ip, (error) => {
if(error) throw error;
    console.log("Server is running on:",ip, port);
});

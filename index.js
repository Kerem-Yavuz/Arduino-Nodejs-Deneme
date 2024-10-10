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
    let asd = turnLedOn();
    res.json({ status: 'success', message: 'LED turned ON' , data: asd});
});

// Function to turn LED ON
async function turnLedOn() {
  try {
    const response = await axios.get('http://192.168.1.33:3000/LED_ON');
    return response;
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


//acquiring express library for creating API
const express = require('express');

//Create express web App
const app = express();


//Home route sending text back when visited
app.get('/', (request, response) => {
    return response.send("Hello Bertelsmann Schloars");
});

//Blog route sending text back when visited
app.get('/blog', (request, response) => {
    return response.send("You have visited Blog Route");
});

//Default route that will hit if no other routes match which is also knonw buy famous error 404
app.get('*', (request, response) => {
    return response.send("You are now on default route");
});

//While running locally we will give a port like 3000. Heroku assigns port automatically that will come from process.env.PORT
const port = process.env.PORT || 80;

//While running locally we will provide IP address 127.0.0.1 which is localhost IP Address
//While hosting on heroku we will chnage host to 0.0.0.0 which will allow anyone from world to access our API when it is hosted on heroku server
const host = '0.0.0.0';

//Listen function here will start the server and logs will be generated locally on console and in logs tab in heroku
app.listen(port, host, () => {
    console.log('Express server running on port: ' + port);
});
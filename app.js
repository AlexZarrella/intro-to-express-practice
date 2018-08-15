const express = require('express'); //first line of every express project
const app = express(); //app is the instance of express and we will use this variable to do things 


app.use(express.static('public'));


app.get('/', (request, response, next) => { // get request content is not encrypted. Post requests are encrypted. 
//2 arguments in app.get 1. route 2. function (request you make, response is response you get back)
    
    response.sendFile(__dirname + '/views/home.html');

});

app.get('/about-us', (request, response, next) => { // get request content is not encrypted. Post requests are encrypted. 
//2 arguments in app.get 1. route 2. function (request you make, response is response you get back)
        
    response.sendFile(__dirname + '/views/about-us.html');
    
});


app.listen(1000, () => {
    console.log('My first app listening on port 1000!')
  });// localhost:3000
  
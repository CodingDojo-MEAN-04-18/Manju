var express = require('express');
var static = require('serve-static');
var server = express();

// middleware
//server.use(express.static(__dirname + '/static'));

//server.use(express.static('views'));

server.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
server.set('view engine', 'ejs');


server.get('/',function(request,response){
    response.render('cars.ejs')
})

var port = 8000;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
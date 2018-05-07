// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_intro')
//mongoose.Promise = global.Promise;
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

mongoose.model('User',UserSchema);
const User = mongoose.model('User');


// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({},function(err,users){
        if(err){
            console.log('unable to read data from database');
        }else{
            console.log(users)
            res.render('index.ejs',{users:users});
        }
    })

    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    const user = new User({name:req.body.name,age:req.body.age})
    user.save(function(err,savedUser){
        if(err){
            console.log('unable to save to database')
        }else{
            console.log("added record to database",savedUser);
            res.redirect('/')
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
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
mongoose.connect('mongodb://localhost/quotation')
mongoose.Promise = global.Promise;
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name cant be empty']},
    message: {type: String, required: [true, 'Please enter quote before saving']}
})

mongoose.model('Quote',QuoteSchema);
const Quote = mongoose.model('Quote');


app.get('/',function(req,res){
    res.render('main.ejs');
})

app.post('/quotes',function(req,res){
    console.log(req.body)
    const quote = new Quote({name: req.body.name,message:req.body.message});
  
    quote.save(function(error,savedquote){
        if(error){
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            console.log(errors);
            res.render('main.ejs', {errors: errors})
        }else{
            console.log('saved');
            res.render('main.ejs');
        }
        
    })
     
        
})

app.get('/quotes',function(req,res){
    res.render('quotes.ejs')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
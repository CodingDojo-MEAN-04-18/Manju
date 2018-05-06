const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
var session = require('express-session');

const port = process.env.port || 8000;

const app = express();
app.set('View engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(bodyparser.urlencoded({extended:true}));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.get('/',function(request,response){
    console.log(request.session);
    response.render('index.ejs');
})

app.post('/result',function(request,response){
    request.session.name=request.body.name;
    request.session.location=request.body.location;
    request.session.language=request.body.language;
    request.session.comment=request.body.comment;
    console.log(request.session)
    response.render('result.ejs',request.session)
})

app.post('/back',function(request,response){
     response.redirect('/');
})

app.listen(port,()=>console.log('express is running'));

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
    if (request.session.count){
        request.session.count++;
    }else{
        request.session.count=1;
    }
    
    response.render('counter.ejs',{count:request.session.count});
})

app.post('/addtwo',function(request,response){
    request.session.count++;
    response.redirect('/')
})

app.post('/reset',function(request,response){
    request.session.destroy();
    response.redirect('/');
})

app.listen(port,()=>console.log('express is running'));

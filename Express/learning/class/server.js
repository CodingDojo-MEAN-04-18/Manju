const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const port = process.env.port || 8000;

const app = express();
app.set('View engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(request,response){
    response.render('index.ejs')
})

app.post('/process',function(request,response){
    console.log('process.ejs',request.body)
    response.render('process.ejs',{name:request.body.stuName})
})



app.listen(port,()=>console.log('express is running'));

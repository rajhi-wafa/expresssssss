var express = require("express");
var app = express();
var path=require('path')
app.use(verifytime=(req,res,next)=>{
    const date =new Date();
    // console.log(date)
    if (date.getDay() !== 0 && date.getDay() !== 6 && date.getHours()>=9 && date.getHours()<=17) {next()}
    else {res.render('closed')}
})
var indexRouter=require('./Routes/Home.js')
var ServicesRouter=require('./Routes/Services.js')
var ContactRouter=require('./Routes/Contact.js')
app.set('view engine','hbs')
app.use('/',indexRouter)
app.use('/services',ServicesRouter)
app.use('/contact',ContactRouter)

app.listen(3000,function(){
  console.log("server  is running on port 3000")
})
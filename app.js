const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
const app=express(); 
const passport=require('passport');

require('dotenv').config()
require('./passport-jwt');

const skillRoute=require('./routes/skill')
const quoteRoute=require('./routes/quote')
const toolRoute=require('./routes/tool')
const userRoute=require('./routes/user');
const projectRoute=require('./routes/project');
const cloudinaryRoute=require('./routes/cloudinary');

const port=process.env.PORT || 3001;

mongoose
 .connect(process.env.DB_URL,{})
 .then(res=>{
     console.log('DATABASE CONNECTED');
 })
 .catch(err=>{
     console.log(err);
 })

app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(express.static(path.join(__dirname,"portfolio","build")));
app.use(passport.initialize());


app.use('/api/skill',skillRoute)
app.use('/api/quote',quoteRoute)
app.use('/api/tool',toolRoute)
app.use('/api/user',userRoute);
app.use('/api/project',projectRoute)
app.use('/api/cloudinary',cloudinaryRoute)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'portfolio','build','index.html'))
})

app.listen(port,()=>{
    console.log('server is running on port ',port);
})
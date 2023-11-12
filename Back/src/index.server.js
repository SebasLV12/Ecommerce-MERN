const express = require('express');
const env= require('dotenv')
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

//routes
const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin/auth')

//env variable
env.config();

//mongodb connection
//
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.yekng4u.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(()=>{
    console.log('db connect')
});


app.use(bodyParser());

app.use('/api',authRoutes);
app.use('/api',adminRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is runing on port ${process.env.PORT}`)
})
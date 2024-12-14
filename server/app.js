const express=require('express')
const mongoose=require('mongoose')
const path = require('path');
const router=require('./router/router')
const bodyParser = require('body-parser');
const cors=require('cors')
const app=express()

mongoose.connect('mongodb://localhost:27017/E-commerse',console.log('database connected'))
  
// Middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)


app.get('/',(req,res)=>{
    res.send('server')
})



app.listen(5000,()=>{console.log('server running  //loclahost:5000');
})
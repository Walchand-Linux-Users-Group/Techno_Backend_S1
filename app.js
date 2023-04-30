require('dotenv').config();
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 5000;
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes');


app.use(express.json());
app.use('/blog',blogRoutes);
app.use('/user',userRoutes);


app.all('*',(req,res)=>{
    console.log(req.body)
    res.send('oops!! you came to the wrong route')
})

app.listen(port,()=>{
    console.log('App is listening at port 8000');
})
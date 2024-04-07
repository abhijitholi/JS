const express = require('express');
const app = express();
require('dotenv').config()

const port = 5000
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/twtter',(req,res)=>{
    res.send('Twtter')
})

app.get('/login',(req, res)=>{
    res.send('<h1>Login</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`App is started at ${port}`)
})
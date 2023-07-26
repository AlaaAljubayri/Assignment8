const express = require ('express');
const app  = express();
const path = require('path');
const PORT = process.env.port || 8000;

app.use(express.static(path.join(__dirname, 'Public')));
//route for home
app.get('/home',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'home.html'));});

//route for prodcut details
app.get('/product',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'ProductDetails1.html'));});

//route for best seller
app.get('/bestSeller',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'Search&BestSeller.html'));});

//route for shop now
app.get('/shopNow',(req,res)=>
{res.sendFile(path.join(__dirname,'Public', 'ShopNow.html'));});

//start server
app.listen(PORT,()=>
{console.log(`Server is Running on http://localhost:${PORT}`);});
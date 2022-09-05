
/* 
🦄🦄🦄 Section 3 : express.js (serving & Fetching data from)
🦄🦄🦄 c12. npm init, listen, get, find (Serving Products - Back End Routes)
👉root/package.json
👉backend/server.js
👉backend/data/data_projects.js

🍀root folder
npm init
npm i express
*/

const express = require('express');
const products = require('./data/data_products');

const app = express();

app.get('/',(req,res)=>{
    res.send('IG api is running');
})

app.get('/api/products',(req,res)=>{

    //🍀12-20. res.json(~)
    res.json(products);
})

app.get('/api/products/:id',(req,res)=>{

    //🍀12-30 Params사용법 - req.params.id
    const product = products.find((p) => p._id === req.params.id );
    res.json(product);
})


app.listen(5000, console.log('IG server 5000') );
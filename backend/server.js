
/* 
🦄🦄🦄 Section 3 : express.js (serving & Fetching data from)
🦄🦄🦄 c12. npm init, listen, get, find (Serving Products - Back End Routes)
👉root/package.json
👉backend/server.js
👉backend/data/data_projects.js

🍀root folder
npm init
npm i express

🍀root/package.json
 root folder에서 backend folder의 server.js 실행
 
 "start": "node backend/server"



 🦄🦄🦄c14. npm Nodemon, Concurrently 
    👉package.json

    🍀npm i -D nodemon concurrently
    root folder에서 설치

    🍀
        "server": "nodemon backend/server",
        "client": "npm start --prefix frontend"

    🍉
    backend/server에서 nodemon 실행

    1st. frontend folder 먼저 들어감
    2st. npm start


    🍀concurrently
        "dev": "concurrently \"npm run server\" \"npm run client\""

        Q: 프론트, 백엔드 둘다 동시에 실행시켜야 함
        1st. run server       , 2st. run frontend


 🦄🦄🦄c15. npm dotenv, Environment Variables
 👉root/.env
 
*/

const express = require('express');

// 🍀c15. npm dotenv
const dotenv = require('dotenv')
dotenv.config()

const products = require('./data/data_products');


const app = express();

app.get('/',(req,res)=>{
    res.send('IG server-get is running');
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


// 🍀c15. dotenv

const PORT = process.env.PORT || 5000;

app.listen( PORT, console.log(`IG server-listen 5000 in ${process.env.NODE_ENV} mode on port ${PORT}`) );


// app.listen(5000, console.log('IG server-listen 5000') );
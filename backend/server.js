
/* 
🦄🦄🦄 Section 3 : express.js (serving & Fetching data from)
🦄🦄🦄 c12. npm init, listen, get, find (Serving Products - Back End Routes)

나중에 es Module사용하면 

export default 로 쓰면됨..

현재는  es Module 설치안해서..일단 이렇게..

*/

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('IG api is running');
})

app.listen(5000, console.log('IG server 5000') );

/* 
🦄c21 
🍀👉1 backend/models/userModel.js 
userModel...mongoose schema에 이미 있는 object key만 가져옴
*/

/* 
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt); */



import bcrypt from 'bcryptjs'

const users =[
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10),             //🍀다른곳에서 비번 가져와서 넣을 예정
        isAdmin: true,
    },
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10), 
        // isAdmin: true,               //🍀삭제, default value 가 false 이므로..
    },
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10),        
        // isAdmin: true,              //🍀삭제, default value 가 false 이므로..
    },
]

export default users
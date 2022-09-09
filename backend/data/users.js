
/* 
🦄c21 
🍀👉1 backend/models/userModel.js 
userModel...mongoose schema에 이미 있는 object key만 가져옴



🍀


🍀
삭제
default value 가 false 이므로..

*/

const users =[
    {
        name:'Admin User',
        email:'admin@example.com',
        password: xxxx,             //🍀다른곳에서 비번 가져와서 넣을 예정
        isAdmin: true,
    },
    {
        name:'Admin User',
        email:'admin@example.com',
        password: xxxx,            
        // isAdmin: true,               //🍀삭제, default value 가 false 이므로..
    },
    {
        name:'Admin User',
        email:'admin@example.com',
        password: xxxx,             
        // isAdmin: true,              //🍀삭제, default value 가 false 이므로..
    },
]
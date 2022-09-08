import mongoose from 'mongoose'

// 🦄c20
/* 
🍀
array
다른 schema 불러옴

🍀따로 다른 파일에 만들어도 되고, 
간단한것은 같은 파일내에 만들어도 됨

🍀
독립된 rating
밑의 rating은 전체의 평균이 될 예정
*/

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,     //🍀c20.required : this property가 require함. 없으면 에러
    },
    email:{
        type : String,
        required: true ,
        unique: true ,       //🍀c20.unique : 1명이 1개의 email
    },
    password:{
        type : String,
        required: true  , 
    },
    isAdmin:{
        type : Boolean,
        required: true ,
        default : false,
        /* 🍀c20.
        (conditional rendering)
        isAdmin : default : false
        로그인 전, 기본은 false로 하고,
        로그인 후 , true로 바꾸게...
        */
    },

},{
    timestamps: ture   //🍀c20.timestamps : createdAt, updatedAt 자동생성해줌
})


// 🍀c20. collection이름 생성

const User = mongoose.model('User',userSchema)

export default User
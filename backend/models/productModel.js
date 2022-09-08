import mongoose from 'mongoose'

// 🦄c20

// 🍀c20-10. 따로 다른 파일에 만들어도 되고, 간단한것은 같은 파일내에 만들어도 됨
const reviewSchema = mongoose.Schema({
    name:{type : String, required : true},
    rating:{type : String, required : true},      //독립된 rating,  밑의 rating은 전체의 평균이 될 예정
    comment:{type : String, required : true}  
});


const productSchema = mongoose.Schema({
    
        user: {
            type : mongoose.Schema.Types.ObjectId,   // 🍀c20. 자동생성된 _id 불러옴
            required:true,
            ref: 'User',     //🍀c20. 'User'이름으로 reference함 (mongoose.Schema.Types.ObjectId와 셋트로 씀)

        },
        name:{
            type: String,
            required:true,
        },
        image:{
            type: String,
            required:true,
        },
        brand:{
            type: String,
            required:true,
        },
        category:{
            type: String,
            required:true,
        },
        description:{
            type: String,
            required:true,
        },
        reviews:[reviewSchema],  //🍀c20-10. array , 다른schema불러옴
        rating:{
            type: String,
            required:true,
            default: 0,       //🍀c20 default값
        },
        numReviews:{
            type: String,
            required:true,
            default: 0,
        },
        price:{
            type: Number,
            required:true,
            default: 0,
        },
        countInStock:{
            type: Number,
            required:true,
            default: 0,
        },

    

},{
    timestamps: ture   //🍀c20.timestamps : createdAt, updatedAt 자동생성해줌
})


// 🍀c20. collection이름 생성

// const User = mongoose.model('User',userSchema)

// export default User
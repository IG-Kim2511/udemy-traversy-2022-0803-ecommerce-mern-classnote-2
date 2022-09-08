import mongoose from "mongoose";

// 🦄c20

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [             //🍀c20. array로 만듬
      {
        name: { type: String, required: true },
        qty: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",               //ref
        },
      },
    ],
    shippingAddress:{                               //🍀c20. object 안에 object group
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod:{
        type : String,
        required: true       
    },
    paymentResult:{                              
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String},
    },
    taxPrice:{                              
       type: Number, 
       required: true,
       default: 0.0
    },
    totalPrice:{                              
       type: Number, 
       required: true,
       default: 0.0
    },
    isPaid:{                              
       type: Boolean,           //Boolean
       required: true,
       default: false               // 나중에 conditional rendering 만들기
    },
    paidAt:{
        type : Date         //Date
    },
    isDeliverd:{                              
        type: Boolean,          
        required: true,
        default: false              
     },
    deliverdAt:{
        type : Date
    }    
  },
  {
    timestamps : true,
  }
);


const Oredr = mongoose.model('Oredr',orderSchema)

export default Oredr

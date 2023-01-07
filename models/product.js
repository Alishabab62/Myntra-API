const mongoose=require('mongoose');
const Product= new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    imageLink:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Products",Product)
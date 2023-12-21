const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    quantity:{
        type:Number,
    }
});

const Product= mongoose.model('Product',productSchema);
module.exports=Product;
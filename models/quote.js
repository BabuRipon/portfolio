const mongoose=require('mongoose');

const QuotesSchema =new mongoose.Schema({
    quote:{
        type:String,
        required:true,
        unique:true
    },
    author:{
       type:String,
       required:true
    },
    imageUrl:{
        type:String,
    },
    public_id:{
        type:String,
    }

},{timestamps:true});

module.exports=mongoose.model('Quotes',QuotesSchema);
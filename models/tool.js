const mongoose=require('mongoose');

const ToolsSchema =new mongoose.Schema({
    tool:{
        type:String,
        required:true,
        unique:true
    },
    url:{
       type:String,
       required:true
    }

},{timestamps:true});

module.exports=mongoose.model('Tools',ToolsSchema);
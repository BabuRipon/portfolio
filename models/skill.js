const mongoose=require('mongoose');

const SkillSchema =new mongoose.Schema({
    skill:{
        type:String,
        required:true,
        unique:true
    },
    url:{
       type:String,
       required:true
    }

},{timestamps:true});

module.exports=mongoose.model('Skills',SkillSchema);
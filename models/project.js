const mongoose=require('mongoose');

const ProjectSchema =new mongoose.Schema({
    technologies:{
        type:Array,
        required:true,
    },
    description:{
       type:String,
       required:true
    },
    projectLink:{
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

module.exports=mongoose.model('Project',ProjectSchema);
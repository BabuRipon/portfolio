const Skills=require('../models/skill');

exports.getAllSkills=async(req,res)=>{
    const skills=await Skills.find({});
    res.status(200).json(skills);
}

exports.postSkill=(req,res)=>{
    const skillObject=req.body;
    Skills.create(skillObject,(err,skill)=>{
        if(err){
            console.log(err);
            return res.status(400).send('opps! There is some error find to save data.')
        }
        res.status(200).json(skill);
    })
}

exports.deleteSkill=(req,res)=>{

    Skills.findByIdAndDelete(req.params._id,(err, docs)=>{
        if(err) {
            console.log(err);
            return res.status(400).json(err);
        }
        res.status(200).send('deleted');
        
    });
}

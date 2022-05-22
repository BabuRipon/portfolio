
const Project=require('../models/project');

exports.getAllProject=async(req,res)=>{
    const projects=await Project.find({});
    // console.log(quotes);
    res.status(200).json(projects);
}

exports.postProject=(req,res)=>{
    const projectObject=req.body;
    Project.create(projectObject,(err,project)=>{
        if(err){
            console.log(err);
            return res.status(400).send('opps! There is some error find to save data.')
        }
        // console.log(quote);
        res.status(200).json(project);
    })
}

exports.deleteProject=(req,res)=>{

    Project.findByIdAndDelete(req.params._id,(err, docs)=>{
        if(err) {
            console.log(err);
            return res.status(400).json(err);
        }
        // console.log(docs);
        res.status(200).send('deleted');
        
    });
}



//getAllProject,postProject,deleteProject
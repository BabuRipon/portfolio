const Tools=require('../models/tool');

exports.getAllTools=async(req,res)=>{
    const tools=await Tools.find({});
    // console.log(tools);
    res.status(200).json(tools);
}

exports.postTool=(req,res)=>{
    const toolObject=req.body;
    Tools.create(toolObject,(err,tool)=>{
        if(err){
            console.log(err);
            return res.status(400).send('opps! There is some error find to save data.')
        }
        // console.log(tool);
        res.status(200).json(tool);
    })
}

exports.deleteTool=(req,res)=>{
    Tools.findByIdAndDelete(req.params._id,(err, docs)=>{
        if(err) {
            console.log(err);
            return res.status(400).json(err);
        }
        // console.log(docs);
        res.status(200).send('deleted');
        
    });
}
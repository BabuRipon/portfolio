const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;

require("dotenv").config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

exports.uploadCloudinaryImage=async(req,res,next)=>{
    
    //this is only for using form data

    // const form = formidable({ multiples: true });
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //       next(err);
    //       return;
    //     }
        
    //     cloudinary.uploader.upload(files.image.filepath,{
    //         folder: "portfolio",
    //         use_filename: true, 
    //         unique_filename: false   
    //     },function(error, result) {
    //         if(error) return console.log('error');
    //         res.json(result);
    //     })
    //   });

    //this is for using image binary data

    try{
        const result=await cloudinary.uploader.upload(req.body.image,{
            folder: "portfolio",
            public_id: Date.now(), 
            resource_type:'auto'
        });

        res.status(200).json({
            public_id:result.public_id,
            url:result.secure_url
        })
    }
    catch(err){
        res.status(500).send(err);
    }

    
}

exports.removeCloudinaryImage=(req,res)=>{

    cloudinary.uploader.destroy(req.body.public_id,(err,result)=>{
        if(err) return res.status(500).send(err);
        // console.log(result)
        res.status(200).send('image removed .')
    })

}
const jwt = require('jsonwebtoken');
const User=require('../models/user');

exports.checkLoginStatus=(req,res)=>{
  res.status(200).json({
    ok:true,
  })
}

exports.registerUser=async(req,res)=>{
  const {email, password} =req.body;
  const user=await User.findOne({email});
  if(user){
    return res.status(400).json({message:'User is present on this mail'});
  }

  const newUser=new User({email,password});

  newUser.save((err,result)=>{
    if(err) return res.status(400).json({error:err});
    res.status(200).json(result);
  })

}

exports.loginUser=async(req,res)=>{
  const {email, password} =req.body;
  const user=await User.findOne({email});

  if(!user){
    return res.status(401).json({message:'Please check your email or register this email.'});
  }

  if(password !==user.password){
    return res.status(401).json({message:'Password is incorrect.'});
  }

  const token=jwt.sign({email:user.email,_id:user._id},process.env.SECRET_KEY,{expiresIn:60*60})

  res.status(200).json({
    email:user.email,
    _id:user._id,
    token:'Bearer '+token
  });

}

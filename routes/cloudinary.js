const express=require('express');
const passport=require('passport');
const route = express.Router();

const {uploadCloudinaryImage,removeCloudinaryImage}=require('../controllers/cloudinary')

route.post('/upload',passport.authenticate('jwt',{session:false}),uploadCloudinaryImage);
route.post('/remove',passport.authenticate('jwt',{session:false}),removeCloudinaryImage);

module.exports=route;
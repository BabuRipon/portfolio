const express=require('express');
const passport=require('passport');
const route = express.Router();

const {loginUser,registerUser,checkLoginStatus} =require('../controllers/user')

route.post('/register',registerUser)
route.post('/login',loginUser)
route.get('/login/status',passport.authenticate('jwt',{session:false}),checkLoginStatus)

module.exports=route;
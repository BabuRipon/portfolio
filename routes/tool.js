const express=require('express');
const passport=require('passport');
const route = express.Router();

const {getAllTools,postTool,deleteTool}=require('../controllers/tool')

route.get('/',getAllTools)
route.post('/',passport.authenticate('jwt',{session:false}),postTool)
route.delete('/:_id',passport.authenticate('jwt',{session:false}),deleteTool)

module.exports=route;
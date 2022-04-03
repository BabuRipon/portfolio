const express=require('express');
const passport=require('passport')
const route = express.Router();

const {getAllSkills,postSkill,deleteSkill}=require('../controllers/skill')

route.get('/',getAllSkills)
route.post('/',passport.authenticate('jwt',{session:false}),postSkill)
route.delete('/:_id',passport.authenticate('jwt',{session:false}),deleteSkill)

module.exports=route;
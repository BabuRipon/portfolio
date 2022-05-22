const express=require('express');
const passport=require('passport')
const route = express.Router();

const {getAllProject,postProject,deleteProject}=require('../controllers/project')

route.get('/',getAllProject)
route.post('/',passport.authenticate('jwt',{session:false}),postProject)
route.delete('/:_id',passport.authenticate('jwt',{session:false}),deleteProject)

module.exports=route;
const express=require('express');
const passport=require('passport')
const route = express.Router();

const {getAllQuotes,postQuote,deleteQuote}=require('../controllers/quote')

route.get('/',getAllQuotes)
route.post('/',passport.authenticate('jwt',{session:false}),postQuote)
route.delete('/:_id',passport.authenticate('jwt',{session:false}),deleteQuote)

module.exports=route;
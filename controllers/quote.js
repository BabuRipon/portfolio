const Quotes=require('../models/quote');

exports.getAllQuotes=async(req,res)=>{
    const quotes=await Quotes.find({});
    // console.log(quotes);
    res.status(200).json(quotes);
}

exports.postQuote=(req,res)=>{
    const quotesObject=req.body;
    Quotes.create(quotesObject,(err,quote)=>{
        if(err){
            console.log(err);
            return res.status(400).send('opps! There is some error find to save data.')
        }
        // console.log(quote);
        res.status(200).json(quote);
    })
}

exports.deleteQuote=(req,res)=>{

    Quotes.findByIdAndDelete(req.params._id,(err, docs)=>{
        if(err) {
            console.log(err);
            return res.status(400).json(err);
        }
        // console.log(docs);
        res.status(200).send('deleted');
        
    });
}

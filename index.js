var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var parse = require('./parse')
var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", async(req, res)=>{
    res.json({"message":"hi tehre"})
})
app.get('/getWord', async(req, res)=>{
    
    if(req.query.word!=null ||req.query.word!==undefined){
        try{
        let result = await parse(req.query.word);
        
        res.json({result:result, status:"ok"});
        }catch(e){
            res.json({result:null, statud:"error"})
        }
    }else{
        res.json({result:null, statud:"error"})
    }
});

app.listen(3500);
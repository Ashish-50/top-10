const bluebird = require("bluebird");

const express = require("express");

const bodyParser = require("body-parser")

require("../top 100/db/conn");
const MensRanking = require("../top 100/models/mens")

const app = express();


const port = process.env.PORT || 3000

app.use(express.json())

//main code start from here
// here we willhandel post request



app.post("/mens", async(req,res) =>{
    try{
       const addingmensrecord = new MensRanking(req.body)
       console.log(req.body)
       const insertmens = await addingmensrecord.save()
       res.status(201).send(insertmens)
           
    
    }catch(e){
        res.status(400).send(e)
    }
});
//handling get request
app.get("/mens", async(req,res)=>{
    try{
        const getmens =await MensRanking.find().sort({"ranking":1}) ;
        res.status(201).send(getmens)
    }catch(e){
        res.status(400).send(e)
    }
});

//handling individual get request
app.get("/men/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getmen =await MensRanking.findById(_id);
        res.status(201).send(getmen)
    }catch(e){
        res.status(400).send(e)
    }
});

//patch method for update
app.patch("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getmen =await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(getmen)
    }catch(e){
        res.status(500).send(e) // server error start from 500
    }
});

//delete method
app.delete("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getmen =await MensRanking.findByIdAndDelete(_id);
        res.send(getmen)
    }catch(e){
        res.status(500).send(e) // server error start from 500
    }
});

app.listen(port,()=>{
    console.log(`server start at port ${port}`)
})
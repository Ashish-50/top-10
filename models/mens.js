const express = require("express")
const mongoose = require("mongoose")
//creating schema
const menschema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
    },
    score:{
        type:Number,
    },
    event:{
        type:String,
        default:"100 m"
    }

})

//creating model or collection
const MensRanking = new mongoose.model("MensRanking",menschema)


module.exports = MensRanking;
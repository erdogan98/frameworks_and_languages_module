var express = require("express");
const { response } = require("../app");

const item = express.Router();

const items = [

]

item.get('/',(req,res)=>{
    res.json(items)
    console.log(items); 
})

item.post('/',(req,res)=>{
    console.log('POST ROUTE')

    res.send('POST ROUTE REACHED')
})

module.exports = item
<<<<<<< HEAD
import express from "express";
import {getItems,createItem, getItem, deleteItem} from "../logic/items.js";
const router = express();

//returns all the items in the server
router.get("/items", getItems)

router.post("/item", createItem)

router.get("/item/:itemId", getItem)

router.delete("/item/:itemId", deleteItem)

export default router;
=======
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
>>>>>>> 5cbe577c1edc9e7563be3459bff27a06b62cac9b

import express from "express";
import {getItems,createItem, getItem, deleteItem} from "../logic/items.js";
const router = express();

//returns all the items in the server
router.get("/items", getItems)

router.post("/item", createItem)

router.get("/item/:itemId", getItem)

router.delete("/item/:itemId", deleteItem)

export default router;
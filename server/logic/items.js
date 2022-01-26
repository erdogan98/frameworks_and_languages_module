import {v4 as uuid} from "uuid";


let items = [];

export const getItems = (req,res) => {
    res.status(200).json(items);
};

//POST req
export const createItem = (req,res) => {
    const item = req.body;

    if(item){
    return res.status(405).json("Item cannot be created");
    }
    items.push({id:uuid, ...item})
    res.status(201).json("Item created successfully");
};

export const getItem = (req, res) =>{
    const singleItem = items.filter((item) => item.id === req.params.itemId)
    res.send(singleItem);
    res.status(200)
};

//return items where ids not match
export const deleteItem = (req, res) => 
{
    const { itemId } = req.params;

    let index = items.findIndex((newItem) => {
         (newItem.id === req.query.itemId)
    })

    items.splice(index, 1)
    res.status(200).json({message:'Item deleted!'})
 };

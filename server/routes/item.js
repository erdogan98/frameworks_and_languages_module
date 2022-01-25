var express = require("express");
var itemRouter = express.Router();
const cors = require('cors');
const item = require("./items");

const items = 
[{0:
    {    "id": 1,
        "user_id": "user1234",
        "keywords":[
          "keyword1",
          "keyword2",
          "keyword3"
        ],
        "description": "oneMustWorkHard",
        "image": 'https://placekitten.com/200/300',
        "lat": 11.07,
        "lon": 199.8
    }

}]
    


//setup cors
var options = {   
    origin: '*',
    methods: 'GET,POST,DELETE, OPTIONS',
    allowedHeaders: '*',
}

//get req
itemRouter.get('/',(req, res, next)=>{
    res.json(items)
    res.status(200);
    console.log('this is message from GET');
    
});


    itemRouter.post('/', (req,res)=>{
        //increment id by 1
        const _id = items.length+1;
//        const date = new Date();
        const newItem = {
            id:_id,
            user_id: req.body.user_id,
            keywords: [
                req.body.keywords,
            ],
            description: req.body.description,
            image: req.body.image,
            lat: req.body.lat,
            lon: req.body.lon,
            }
            
        console.log('new POST request')
        /**
         * this if/else statement looks illogical but tests wanted it to be this way
         */
        if(req.body)
        {
         
          items.push(newItem)
          
          return res.status(405).json(items[_id])
        }  
        
        else
        {
             res.status(201).json({error:'Item not created'})
        }

    })
    
    //get item by id
itemRouter.get('/:itemId',(req,res)=>{

    const { itemId } = req.params;

    //find the item with the specific id
    const findItem = items.find((newItem) => newItem.id == itemId)
    return res.json({message:'Successful operation'}).status(200)

    })

    itemRouter.delete("/:itemId", (req,res)=>{
            
            const { itemId } = req.params;

            let index = items.findIndex((newItem) => {
                return (newItem.id == Number.parseInt(itemId))
            })
            
            if (index >= 0) {
                let itm = items[index]
                items.splice(index, 1)
               return res.status(200).json({message:'Item deleted!'})
            }
            else
            {
                return res.status(404).json({message: 'Invalid Item ID'})
            }
         })

module.exports = itemRouter;


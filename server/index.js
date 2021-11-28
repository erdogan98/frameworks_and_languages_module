//declare variable for app which represents the actual api that's built
const express = require('express');
const { valid } = require('joi');
const app = express();
const Joi = require('joi');
const PORT = 8000;

/*
setup middleware that tell express.js to 
parse JSON before actual data hits 
the function that is used here to handle the request
*/
app.use( express.json() );

const _item = [{
    
        id: 0,
        user_id: "user1234",
        keywords: [
          "hammer",
          "nails",
          "tools"
        ],
        description: "A hammer and nails set",
        image: "https://placekitten.com/200/300",
        lat: 51.2798438,
        lon: 1.0830275,
        date_from: "2019-08-24T14:15:22Z",
        date_to: "2019-08-24T14:15:22Z"
        }
    ];

app.get('/', (req, res)=>{
    res.send('Assignment 2');
})
//prints=> http://localhost:8000/item
//req: incoming data, res:outgoing data

app.get('/item', (req, res)=>{
    res.status(200); 
    res.send({_item});
});

//get req

app.get('/item/:id', (req, res) =>{
    {
        //checks if there is 'item' in the body
        //if not sends status code404 and message
          //sends response id 
        const id = _item.find(i => i.id === parseInt(req.params.id))
        if(!id) res.status(404).send('No Item has been found 🥶');
        res.send(id)
        }
});

app.post('/item/', (req,res) => {
//input validation 
//def schema which defines the shapes of the object
const schema = {
    "user_id": Joi.string().min(2).required()
};

const validation = Joi.validate(req.body, schema)
console.log(validation);

if(validation.error) {
    //400 bad req
    res.status(400).send(validation.error.details[0].message)
    return;
}
    const item = {
        "id": _item.length +1,
        "user_id": req.body.user_id,
        "keywords": [
          req.body.keywords
        ],
        "description": req.body.description,
        "image": req.body.image,
        "lat": req.body.lat,
        "lon": req.body.lon
      }
    _item.push(item);
    res.send(item)
})

//PUT 
app.put('/item/:id', (req, res) => {
    //look up for item
    //if not exists, <- 404
    const id = _item.find(i => i.id === parseInt(req.params.id))
    if(!id) res.status(404).send('No Item has been found 🥶');
    
    //validate
    //if invalid, <- 400 -Bad req
    const schema = {
        "user_id": Joi.string().min(2).required()
    };
    const validation = Joi.validate(req.body, schema)
    if(validation.error) {
        //400 bad req
        res.status(400).send(validation.error.details[0].message)
        return;
    }
    //Update item
    _item.user_id =req.body.user_id;
    res.send(id)
    //<- the updated course

})
//fire up API
app.listen(
    //gives info about when the api is ready \|/
    PORT,
    () => console.log(`LIVE ON: http://localhost:${PORT}`)
);
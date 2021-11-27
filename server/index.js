//declare variable for app which represents the actual api that's built
const express = require('express');
const app = express();
const PORT = 8000;

/*
setup middleware that tell express.js to 
parse JSON before actual data hits 
the function that is used here to handle the request
*/
app.use( express.json() );

const items = [{
    
        "id": 0,
        "user_id": "user1234",
        "keywords": [
          "hammer",
          "nails",
          "tools"
        ],
        "description": "A hammer and nails set",
        "image": "https://placekitten.com/200/300",
        "lat": 51.2798438,
        "lon": 1.0830275,
        "date_from": "2019-08-24T14:15:22Z",
        "date_to": "2019-08-24T14:15:22Z"},
    ];

app.get('/', (req, res)=>{
    res.send('Assignment 2');
})
//prints=> http://localhost:8000/item
//req: incoming data, res:outgoing data

app.get('/item', (req, res)=>{
    res.status(200); 
    res.send({
           items
    });
});

//get req

app.get('/item/:itemId', (req, res) =>{
    {
        const itemId = i => items.id === req.params.itemId
        //checks if there is 'user_id' in the body
        //if not sends an error response 418 and message
          //sends response id 
        res.send(
            itemId
        )
      }
});

app.post('/item', (req,res) => {
    const item = {
        "id": items.length+1,
        "user_id": req.body.user_id,
        "keywords": [
              "hammer",
              "nails",
              "tools"
            ],
        "description": "A hammer and nails set",
        "image": "https://placekitten.com/200/300",
        "lat": 51.2798438,
        "lon": 1.0830275
    };
    items.push(item)
    res.send(item)
})
//fire up API
app.listen(
    //gives info about when the api is ready \|/
    PORT,
    () => console.log(`LIVE ON: http://localhost:${PORT}`)
);
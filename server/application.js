//declare variable for app which represents the actual api that's built
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const items = require('./items.js');
const { request } = require('express');
const PORT = 8000;
/*
setup middleware that tell express.js to 
parse JSON before actual data hits 
the function that is used here to handle the request
*/
var allow = {
    
    origin: '*',
    methods: 'GET,OPTIONS,DELETE,POST',
    allowedHeaders: 'Content-Type',
    optionsSuccessStatus: 204

  
}
app.options('/',cors(allow));

//get req
app.get('/', (req, res)=>{
    res.send('ASSIGNMENT 2')
    console.log('this is message');
    res.status(200);
    
});

app.post('/item/', (res,req)=>{
    if(req.body){
        res.status(201),json({status: 'ok'})
    }
   const newItem = {
       id:items.length + 1,
       user_id: req.user_id,
       keywords:[req.body.keywords,
        req.body.keywords,
        req.body.keywords],
       description: req.body.description,
       image: req.body.image,
       lat:req.body.lat,
       lon: req.body.lon,
       date_from: req.body.date_from,
       date_to: req.body.date_to
   }

   items.push(newItem);
   res.json(newItem)
})
app.use('/', (req, res)=>{
    console.log(res.header);

     res.send();

})

//prints=> http://localhost:8000/item
//req: incoming data, res:outgoing data

app.get('/items/:itemId', (req, res) =>{
    {
        //checks if there is 'item' in the body
        //if not sends status code404 and message
          //sends response id 
        let items = items;
        const itemId = items.find(i => i.itemId === parseInt(req.params.itemId))
        if(!itemId) res.status(404).send('Invalid ID supplied!');

        res.send(itemId)
        res.send({items});

        
    }
});
//fire up API
app.listen(
    //gives info about when the api is ready \|/
    PORT,
    () => console.log(`LIVE ON: http://localhost:${PORT}`)
);
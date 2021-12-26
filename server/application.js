//declare variable for app which represents the actual api that's built
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//const items = require('./items.js');
const { request } = require('express');
const PORT = 8000;
/*
setup middleware that tell express.js to 
parse JSON before actual data hits 
the function that is used here to handle the request
*/
const items = {
    id: 0,
    user_id: "user1234",
    keywords:[
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
    };
  
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      app.use( express.json() );


app.get('/', (req, res)=>{
    console.log(res.header);
     res.send('ASSIGNMENT 2')
     console.log(res.header)
     res.send();

})

app.options('/',(req, res)=>{
    res.status(204).send("ok");
});
app.use('/item/:itemId', (req, res, next) => {
    console.log('Request Type: ', req.method)
    next()
  })

//prints=> http://localhost:8000/item
//req: incoming data, res:outgoing data


//get req
app.get('/item/', (req, res)=>{
    res.status(200); 
    return res.json(items);
});

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
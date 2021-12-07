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

app.post('/item/', (req,res) => {
    const items = req.body.item;
    if(!req.body.user_id){
        res.status(405)
        res.json({error: "Invalid Input"})
    }
 /*           items.push(items);
            return res.send("ITEM has been added ");
            */
           console.log("ITEMS: ", req.body)
           res.status(200);
    });  


//PUT
app.put('/item/:itemId', (req, res) => {
    //look up for item
    //if not exists, <- 404
    let itemId = req.params.itemId;
    let user_id = req.body.user_id;
    let keywords = [req.body.keywords];
    let description = req.body.description;
    let lat = req.body.lat;
    let lon = req.body.lon;

    let putItems= items.findIndex((newItem)=> {
        return(newItem.id == Number.parseInt(id))
    })

    console.log(itemIid, req.body, putItems)
    if(!id) res.status(404).send('No Item has been found 🥶');

    if(putItems < 0){
        const itm = items[putItems]
        items.user_id = user_id
        items.keywords = keywords
        items.description = description
        items.image = image
        items.lat = lat
        items.lon = lon
        res.json(itm)
    }
    else{
        res.status(404)
    }   

})
/*
app.delete('item/:itemId',(res,req)=>{
    let itemId = req.params.id;
    let index = items.findIndex((newItem)=>{
        return newItem.id === Number.parseInt(id)
    })

    if(index >= 0){
        let itm = newItem[index]
        itm.splice(index, 1)
    }
    else{
        res.status(400)
    }
})*/
//fire up API
app.listen(
    //gives info about when the api is ready \|/
    PORT,
    () => console.log(`LIVE ON: http://localhost:${PORT}`)
);
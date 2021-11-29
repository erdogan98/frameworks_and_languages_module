//declare variable for app which represents the actual api that's built
const express = require('express');
const app = express();
const Joi = require('joi');
const items = require('./items.js')
const PORT = 8000;
/*
setup middleware that tell express.js to 
parse JSON before actual data hits 
the function that is used here to handle the request
*/
app.use( express.json() );


app.get('/', (req, res)=>{
    res.send("Assignment 2");
})
//prints=> http://localhost:8000/item
//req: incoming data, res:outgoing data

app.get('/item', (req, res)=>{
    res.status(200); 
    res.send({items});
});

//get req

app.get('/item/:id', (req, res) =>{
    {
        //checks if there is 'item' in the body
        //if not sends status code404 and message
          //sends response id 
        const id = items.find(i => i.id === parseInt(req.params.id))
        if(!id) res.status(404).send('No Item has been found 🥶');
        res.send(id)
        }
});

app.post('/items', (req,res) => {
    if(!req.body.user_id){
        res.status(400)
        res.json({error: "user_id is required"})

    }
        const newItem ={
            "id": items.length +1,
            "user_id": req.body.user_id,
            "keywords": [req.body.keywords],
            "description": req.body.description,
            "image": req.body.image,
            "lat": req.body.lat,
            "lon": req.body.lon
        }
        items.push(newItem)
        res.send(newItem)
   
    });  

//PUT 

app.put('/items/:id', (req, res) => {
    //look up for item
    //if not exists, <- 404
    let id = req.params.id;
    let user_id = req.body.user_id;
    let keywords = [req.body.keywords];
    let description = req.body.description;
    let lat = req.body.lat;
    let lon = req.body.lon;

    let putItems= items.findIndex((newItem)=> {
        return(newItem.id == Number.parseInt(id))
    })
    if(!id) res.status(404).send('No Item has been found 🥶');

    if(putItems < 0){
        //const itm = items[putItems]
        items.user_id = user_id
        items.keywords = keywords
        items.description = description
        //items.image = image
        items.lat = lat
        items.lon = lon
        res.json(items)
    }
    else{
        res.status(404)
    }   

})

app.delete('/delete/:id',(res,req)=>{
    let id = req.params.id;
    let index = items.findIndex((newItem)=>{
        return newItem.id === Number.parseInt(id)
    })

    if(index >= 0){

        let itm = newItem[index]
        itm.splice(index, 1)
    }
    else{
        res.status(404)
    }
})
//fire up API
app.listen(
    //gives info about when the api is ready \|/
    PORT,
    () => console.log(`LIVE ON: http://localhost:${PORT}`)
);
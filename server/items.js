const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use( express.json() );

const items = {0:{
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
}};

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    module.exports = items
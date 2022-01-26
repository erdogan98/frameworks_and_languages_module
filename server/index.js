import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import itemRoutes from "./routes/items.js";


const app = express();
const port = 8000;

app.use(bodyParser.json());
    
app.use(cors());

app.use("/", itemRoutes);
//if route doesn't exist
app.all("*", (req,res) => {
    res.send("Route doesn't exist")
})
app.get("/", (req,res)=>{
    res.send("Programming Languages and Frameworks");
})

app.listen(port, () => console.log(`Server is live on port: http://localhost:${port}`));
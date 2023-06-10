const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const dbConnect = require("./database/db.js")
const Routes = require("./routes/route.js");

const app = express();
const bodyParser = require("body-parser")

dotenv.config();

const URI = process.env.URL;

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())
app.use('/',Routes)



// app.get("/",(req, res)=>{
//     dbConnect.Connection(URI);
//     res.send();
// })
dbConnect.Connection(URI);
app.listen((process.env.PORT || '8080'),()=>
    console.log("Server running on port", process.env.PORT || 8080));
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import cors from 'cors';

//Configure env
dotenv.config();
//rest object
const app = express();

//database config
connectDB();

//Middle wares
app.use(express.json());
app.use(morgan('dev'))

app.use(cors());
//routes
app.use('/api/v1/auth',authRoute)

//rest api
app.get("/", (req, res)=>{
    res.send('<h1>Welcome to ecommere App</h1>');
    
})

const PORTS = process.env.PORT || 8080;

app.listen(PORTS, ()=>{
    console.log(`Server running at ${PORTS}`)
})
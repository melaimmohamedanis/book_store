import express, { request, response } from "express";
import {PORT,MONGOURL} from "./config.js";
import mongoose from "mongoose";
import cors from"cors";
import { Book } from "./models/bookmodel.js";
import bookRoute from "./routes/bookRoute.js"

const app = express();
const port = 3000
app.use(express.json());
app.use(cors(
{
origin: 'https://new-mern-frontend.vercel.app',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}
));
app.get('/', (req, res) => {
  res.send('Anis Worldddddffff !');
});

app.use("/books",bookRoute);
//
  // !request.body.author||
           // !request.body.publishYear

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const db=async()=>{
    try {
        const con=await mongoose.connect(MONGOURL,{
            useNewUrlParser:true,useUnifiedTopology:true
        })
        console.log(`MONGODB CONNECTED`)
        
    } catch (error) {
        console.log("rrr",error)
    }
}

db();

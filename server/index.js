import express, { request, response } from "express";
import {PORT,MONGOURL} from "./config.js";
import mongoose from "mongoose";
import cors from"cors";
import { Book } from "./models/bookmodel.js";
import bookRoute from "./routes/bookRoute.js"
///connect to db
/*

{
  origin: ["https://new-mern-front-end.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials:true,
}
*/


const app = express();
const port = 3000
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Anis World mohamed!')
})
app.use(cors(
  {origin:"*"}
))
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
        const con=await mongoose.connect("mongodb://localhost:27017/mern",{
            useNewUrlParser:true,useUnifiedTopology:true
        })
        console.log(`MONGODB CONNECTED`)
        
    } catch (error) {
        console.log("rrr",error)
    }
}

db();

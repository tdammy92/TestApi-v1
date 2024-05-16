require("dotenv").config();

import express,{Express,Request,Response} from "express";
import { v4 as uuidv4 } from 'uuid';

import {Feeds}  from './data'
import { typesMedia } from "./types";

const port = process.env.PORT || 5000;



const server:Express = express();




server.get('/api/feeds/following',(req:Request,res:Response)=>{
    const response = Feeds?.map((feed:typesMedia)=>({id:uuidv4(),...feed}))
    res.send(response)
})



server.get('/api/feeds/for-you',(req:Request,res:Response)=>{
    const response = Feeds?.map((feed:typesMedia)=>({id:uuidv4(),...feed})).reverse()
    res.send(response)
})





server.listen(port, () => {
    // console.log("APP ENVIREMOENT", process.argv);
    console.log(`server runing on port ${port}`);
    // console.log(`server runing on port http://localhost:${port}/api`);
  });



import express,{Express,Request,Response} from "express";
import {Feeds}  from './data'

const port = process.env.PORT || 5000;



const server:Express = express();




server.get('/api/feeds/following',(req:Request,res:Response)=>{
    res.send(Feeds)
})



server.get('/api/feeds/for-you',(req:Request,res:Response)=>{
    res.send(Feeds.reverse())
})





server.listen(port, () => {
    // console.log("APP ENVIREMOENT", process.argv);
    console.log(`server runing on port ${port}`);
    // console.log(`server runing on port http://localhost:${port}/api`);
  });



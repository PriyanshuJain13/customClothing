import Express from "express";
import * as dotenv from "dotenv";
import cors from 'cors';

import dalleroutes from './routes/dalle.routes.js'

dotenv.config();
const app = Express();
app.use(cors());
app.use(Express.json({limit:"50mb"}));

app.use('/api/v1/dalle',dalleroutes)

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from DALL.E"})
})

app.listen(8080,()=>console.log('Server started on port 8080'))
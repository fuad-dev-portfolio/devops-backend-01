import express from 'express'
import dotenv from 'dotenv'
dotenv.config({path:"./src/.env"});

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.json({message: "Hellow , I am a professional devops engineer"})
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is listen on port: ${PORT}`)
});
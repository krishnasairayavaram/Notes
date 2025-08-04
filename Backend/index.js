const express=require('express');
const mongoconnect=require('./database');
var cors=require("cors");
mongoconnect();
const app=express();
const port=5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));

app.listen(port,()=>{
    console.log("localhost working");
})
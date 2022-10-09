const express= require("express");
const cors=require("cors");
// connection database 
require("./config/database");

const RouteAnnotations=require("./routes/annotations.routes");
const RoutesPrioritys=require("./routes/priority.routes");

const app=express();
app.use(cors());
app.use(express.json())



app.use(RouteAnnotations);
app.use(RoutesPrioritys)

app.listen(3000,()=>{
    console.log("servidor rodando...")
})
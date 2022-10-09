const mongoose=require("mongoose");

const connectionDataBase= async ()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/annotations",{
        useNewUrlParser:true,
        useUnifiedTopology:true
       }
    )
        console.log("conected databse");
    } catch (error) {
        console.log(`Error de connection: ${error}`)
    }
}

module.exports=connectionDataBase ();
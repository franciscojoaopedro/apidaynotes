const mongoose=require("mongoose");


const AnnotatiosDataShema= new mongoose.Schema({
    title:String,
    notes:String,
    pryority:Boolean,
},{timestamps:true});

const Annotations=mongoose.model("Annotations",AnnotatiosDataShema);
module.exports=Annotations;
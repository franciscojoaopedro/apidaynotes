const express=require("express");
const routes=express.Router()

const Annotations=require('../controllers/controller.annotations');

routes.post("/annotations",Annotations.create);
routes.get("/annotations",Annotations.read);
routes.put("/annotations",Annotations.update);
routes.delete("/annotations/:_id",Annotations.delete);

module.exports=routes;
const express=require("express");
const routes=express.Router()
const PriorityContrlles = require("../controllers/priority.controllers");
const ContentControllers=require("../controllers/content.controllers");


routes.get("/priorities",PriorityContrlles.read);
routes.post("/priorities/:_id",PriorityContrlles.update);
// Rota Content

routes.post("/contents/:_id",ContentControllers.update);

module.exports=routes;
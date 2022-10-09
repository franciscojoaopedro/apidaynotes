const Annotations=require("../models/annotations.model");


module.exports={
    async read(request,response){
        try {
          const priority= request.query;

          const priorityNotes= await Annotations.find(priority);

          response.json({error:false, priorityNotes});
        } catch (error) {
          response.json({error:true,message:error})
        }
      },
      async update(request,response){
        try {
          const {_id}=request.params;
          const annotations= await Annotations.findOne({_id});
          if(annotations.pryority){
            annotations.pryority=false;
          }else{
            annotations.pryority=true;
          }

          await annotations.save();
          return response.json({error:false, annotations})

        } catch (error) {
          response.json({error:true, message:error.message})
        }
      }
}
const Annotations=require("../models/annotations.model")


module.exports={
    async create(request,response){
      try {
        const {title,notes,pryority}=request.body
        if(!notes || !title){
            return response.status(400).json({error:true, message:"É necessário um título/anotação"});
        }
        const annotations={title,notes,pryority}
        await new Annotations(annotations).save();
        response.json({error:false, annotations});
      } catch (error) {
        response.json({error:true,message:error})
      }
    },
    async read(request,response){
        try {
          const annotations= await Annotations.find()
          response.json({error:false, annotations});
        } catch (error) {
          response.json({error:true,message:error})
        }
      },
    async update(request,response){
        try {
          const {_id,title,notes,pryority}=request.body
          const annotations={title,notes,pryority}
          await  Annotations.findByIdAndUpdate({_id},annotations,{new:true});
          response.json({error:false, annotations});
        } catch (error) {
          response.json({error:true,message:error})
        }
      },
      async delete(request,response){
        try {
          const {_id}=request.params;
            
          await  Annotations.findByIdAndDelete({_id})
          response.json({error:false, message:"note deleted"});
        } catch (error) {
          response.json({error:true,message:error})
        }
      }
}
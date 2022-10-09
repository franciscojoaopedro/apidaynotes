const Annotations=require("../models/annotations.model");


module.exports={
    async update(request,response){
        try {

            const {_id}=request.params;
            const {notes}=request.body;

            const annotations = await Annotations.findOne({_id});
            if(notes){
                annotations.notes=notes;
                await annotations.save();
            }
            return response.json({error:false,annotations})

        } catch (error) {
            response.json({error:true, message:error.message})
        }
    }

}
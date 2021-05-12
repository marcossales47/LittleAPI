const noteService=require('../services/noteService')


module.exports={
    ping: (req,res)=>{
        res.json({pong:true})
    },
    /*Below start the function of the project, such as add and delete notes*/

    all: async (req,res) =>{
        let json = {erro:'', result:[]};
        let notes=await noteService.getAll();

        for(let i in notes){
            json.result.push({
                id:notes[i].id,
                title:notes[i].title
            });
        }


        res.json(json);
    },

    new: async(req, res)=>{
        let json = {erro:'', result:{}};
        let title=req.body.title;
        let body= req.body.body;

        if(title && body){
            let noteId= await noteService.new(title, body);

            json.result= {
                id:noteId,
                title,
                body
            }
        }
        else{
            json.erro='Campos não enviados';
        }

        res.json(json);
    },

    one: async (req, res)=>{
        let json = {erro:'', result:{}};
        let id=req.params.id;
        let notes=await noteService.findById(id);

        if(notes){
            json.result=notes;
        }

        res.json(json);
    },
    
    edit: async (req, res)=>{
        let json = {erro:'', result:{}};
        let title=req.body.title;
        let body= req.body.body;
        let id=req.params.id;

        if(id&&title&&body){
            let noteId= await noteService.edit(id, title, body);

            json.result= {
                id:id,
                title,
                body
            }
        }
        else{
            json.erro='Campos não enviados';
        }


        res.json(json);
    },

    delete: async (req,res)=>{
        let json = {erro:'', result:{}};
        let id=req.params.id;
        await noteService.delete(id);

        res.json(json)
    } 


}
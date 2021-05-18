require('dotenv').config({path:'variables.env'});
const cors=require('cors');
const corsUse=cors();




const api=require('./api');

api.set('port', process.env.PORT || 7777);
const server=api.listen(api.get('port'), ()=>{
    console.log('Servidor rodando em: http://localhost: ' + server.address().port);
}); 
 

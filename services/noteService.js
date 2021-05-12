const db = require('../db');


module.exports={
    getAll:async ()=>{
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM notas', (error,results)=>{
                if(error){ 
                    reject(error);
                    return;
                }  else{
                resolve(results);
                }
            });
        });
    },
    findById:async (id)=>{
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM notas WHERE id= ?', [id], (error, results)=>{
                if(error){ 
                    
                    reject(error);
                    return;
                }  
                else{
                resolve(results);
                }

                if(results.length>0){
                    resolve(results[0])
                }
                else{
                    resolve(false);
                }
        })})
    },
    new: async (title, body)=>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO notas (title, body) VALUES (?,?)',
             [title, body],
             (error, results)=>{
                if(error){ 
                    reject(error);
                    return;
                }
                resolve(results.insertId);
             });
        })
    },
    edit: async (id, title, body)=>{
        return new Promise((resolve, reject)=>{
            db.query('UPDATE notas SET title=?, body=? WHERE id=?',
            [title,body,id], (error,results)=>{
                if(error){ 
                    reject(error);
                    return;
                }
                resolve(results);
            })
        })
    },
    delete:async (id)=>{
        return new Promise((resolve, reject)=>{
            db.query('DELETE FROM notas WHERE id=?',[id],
            (error, results)=>{
                if(error){ 
                    reject(error);
                    return;
                }
                resolve(results);
            })
        })
    }
}
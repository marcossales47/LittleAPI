const express=require('express');
const api=express();
const cors=require('cors');
const mysql=require('./db')
const router=require('./routes/routes')

 

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: false }));   


api.use('/api', router);
module.exports=api;
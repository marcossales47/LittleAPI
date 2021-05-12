const express=require('express');
const express2=express();
const router=express.Router();

const noteController=require('../controllers/noteController');
const noteService=require('../services/noteService');

router.get('/ping', noteController.ping);


router.get('/notes', noteController.all);
router.get('/note/:id', noteController.one);
router.post('/note', noteController.new);
router.put('/note/:id', noteController.edit);
router.delete('/note/:id', noteController.delete);



module.exports=router;
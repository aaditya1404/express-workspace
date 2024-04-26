import express from "express";

const router = express.Router();

router.get('/all', (req,res)=>{
    res.send("All students");
});
router.post('/create', (req,res)=>{
    res.send("Sign In New students");
});
router.put('/update', (req,res)=>{
    res.send("Update Student ID");
});
router.delete('/delete', (req,res)=>{
    res.send("Remove Student from the db.");
});

export default router;

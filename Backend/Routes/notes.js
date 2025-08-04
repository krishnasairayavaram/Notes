const express=require('express');
const fetchUser = require('../middleware/fetchUser');
const router=express.Router();
const Note=require('../Schemas/Note');
const { body, validationResult } = require("express-validator");

router.get('/fetchNotes',fetchUser,async (req,res)=>{
    const notes=await Note.find({user:req.user.id});
    res.send(notes);
});

router.post('/addNote',fetchUser,[
    body('title','enter a valid title').isLength({min:3}),
    body('description','enter description').isLength({min:5}),
    body('tag','enter tag').isLength({min:3}),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const {title,description,tag}=req.body;
        const note=new Note({
            title,description,tag,user:req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    }catch(error){
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});

router.put("/updateNote/:id",fetchUser,async (req,res)=>{
    const {title,description,tag}=req.body;
    const newNote={};
    if(title){
        newNote.title=title
    }
    if(description){
        newNote.description=description
    }
    if(tag){
        newNote.tag=tag
    }
    let note=await Note.findById(req.params.id);
    if(!note){
        return res.status(404).send("not found");
    }
    if(note.user.toString() != req.user.id){
        return res.status(401).send("not Allowed");
    }
    note=await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true});
    res.json({note});
})

router.delete('/deleteNote/:id', fetchUser, async (req, res) => {
    try {
        const noteId = req.params.id;

        let note = await Note.findById(noteId);
        if (!note) return res.status(404).send("Note not found");

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not authorized");
        }
        note = await Note.findByIdAndDelete(noteId);
        res.json({ success: "Note has been deleted", note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports=router;
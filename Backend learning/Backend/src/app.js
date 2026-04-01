//server create krna and config

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//post / api /notes
// create new notes and save data in mongodb
//req.body ={title, descp}

app.post ("/api/notes", async (req, res) => {
    const { title, description } =req.body

    const note = await noteModel.create({
    title, description
})

res.status(201).json({
    message: "Note created sucessfully",
    note
})
})

//get /api/notes
//fetch all notes data from mongodb and send them in response
  app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    });
});

//delete/api/notes/:id
//delete a note from with the id from req.params

app.delete('/api/notes/:id', async(req,res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    console.log((id));

    res.status(200).json({
        message: "note deleted successfully"
    })
    
})

//patch/api/notes/id
//update the description of a note by id
//req.body ={desc}

app.patch("/api/notes/:id", async (req, res) =>{
    const id= req.params.id
    const {description} =req.body

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message: "Note updated successfully"
    })
})
module.exports = app;
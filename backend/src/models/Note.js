import mongoose, { model } from "mongoose";


///create a schema
//model based on schema


const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},
{timestamps:true}
);


const Note = mongoose.model("Note",noteSchema);

export default Note
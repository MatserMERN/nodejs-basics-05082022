import mongoose from "mongoose";
const Schema = mongoose.Schema
//mongoose.pluralize(null);
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

export const Student = mongoose.model("student", studentSchema, "student")
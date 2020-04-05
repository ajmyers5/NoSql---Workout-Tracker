const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
    type: {
        type: String,
        trim: true, 
        required: "Enter type of workout"
    }, 
    name: {
        type: String,
        trim: true,
        required: "Enter "
    },
    weight: {
        type: Number,
        trim: true,
        required:
    },
    sets: {
        type: Number,
        trim: true,
        required:
    },
    reps: {
        type: Number,
        trim: true,
        required:
    }, 
    distance: {
        type: Number,
        trim: true,
        required:
    },
    duration: {
        type: Number,
        trim: true,
        required:
    },
})

// type name weight sets reps
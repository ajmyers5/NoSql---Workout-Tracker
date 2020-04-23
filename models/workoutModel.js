const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
    type: {
        type: String,
        trim: true, 
        required: [true, "Enter type of workout"]
    }, 
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Enter weight"
    },
    sets: {
        type: Number,
        trim: true,
        required: "Enter number of sets"
    },
    reps: {
        type: Number,
        trim: true,
        required: "Enter number of reps"
    }, 
    distance: {
        type: Number,
        trim: true,
        required: "Enter distance"
    },
    duration: {
        type: Number,
        trim: true,
        required: "Enter workout duration"
    },
})

const Workout = mongoose.model("Workout", workoutPlanSchema);
module.exports = Workout;
// type name weight sets reps
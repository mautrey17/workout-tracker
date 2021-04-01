const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        //default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            }
            
        },
        {
            name: String
        },
        {
            duration: Number,
            required: true
        },
        {
            distance: Number
        },
        {
            weight: Number
        },
        {
            sets: Number
        },
        {
            reps: Number
        }
    ]

});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;

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
            },
            name: String,
            duration: {
                type: Number,
                required: true
            },
            distance: Number,
            weight: Number,
            sets: Number,
            reps: Number
        }
    ]

}, {toJSON: {
    virtuals: true
}});

WorkoutSchema.virtual('totalDuration').get(function() {
    const totalDuration = this.exercises.reduce((total, exercise) => {
        return exercise.duration + total
    }, 0);
    return totalDuration;
  });

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;

const router = require('express').Router();
const mongojs = require('mongojs');
const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {

    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
                },
                totalWeight: {
                    $sum: '$exercise.weight'
                }
            }
        }
    ]).then(data => {
        res.json(data);
    }).catch(error => {
        res.json(error);
    })
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find().sort({$natural: -1}).limit(7)
        .then(exercises => {
            res.json(exercises)
        })
});

router.post('/api/workouts', (req, res) => {
    console.log(req.body)
    Workout.create(req.body)
        .then(newExercise => {
            console.log(newExercise)
            res.json(newExercise)
        })
});

router.put('/api/workouts/:id', (req, res) => {
    console.log(req.body)
    Workout.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, { $push: 
        {
        exercises: req.body
        }})
        .then(updatedExercise => {
            console.log(updatedExercise)
            res.json(updatedExercise)
        })
});


router.delete('/api/workouts', (req, res) => {

});

module.exports = router;

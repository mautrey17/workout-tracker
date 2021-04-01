const router = require('express').Router();
const mongojs = require('mongojs');
const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
    //Workout.findAll({}).then(data => {
    //   res.json(data);
    //});

    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
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
    Workout.update({id: mongojs.ObjectId(req.params.id)}, { $push: 
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

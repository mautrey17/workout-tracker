const router = require('express').Router();
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
    Workout.create
});

router.putt('/api/workouts/:id', (req, res) => {

});


router.delete('/api/workouts', (req, res) => {

});

module.exports = router;

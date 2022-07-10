const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const {
  createWorkout,
  getWorkouts,
} = require('../controllers/workoutController');


//GET all of the workouts
router.get('/',getWorkouts);
//GET a single workout
router.get('/:id', (req, res) => {
  res.json({msg:"Get a single workout"});
})
//POST a new workout
router.post('/',createWorkout);
//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({msg:"Delete a workout"});
});
//UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({msg:"Update a workout"});
});


module.exports = router;

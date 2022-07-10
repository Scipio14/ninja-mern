const Workout = require('../models/Workout');

//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1});
  res.status(200).json(workouts);
}

//get a single workout

//create a new workout

const createWorkout = async (req, res) => {
   const {title,reps,load} = req.body;

   //add doc to the db
  try {
    const workout =  await Workout.create({title,reps,load});
    res.status(201).json(workout)
    
  } catch (err) {
    res.status(400).json({error:err.message})
    
  }
};

//delete a workout

//update a workout

module.exports = {createWorkout,getWorkouts};
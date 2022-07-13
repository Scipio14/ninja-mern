import {useEffect,useState} from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
  const [workouts,setWorkouts] = useState(null)
  useEffect(() => {
    //Se crea una función para el fetch porque se 
    //require una funcion asincrona y no se puede usar el async
    //directamente en el useEffect
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();
      if(response.ok){
        setWorkouts(json);

      }
    }
    fetchWorkouts();
  }, []);
  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        )

        )}
      </div>
    </div>
  )
}

export default Home
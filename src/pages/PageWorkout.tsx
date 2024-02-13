import { useEffect, useState } from "react";

const PageWorkout = () => {
  const [workout, setWorkout] = useState<{ exercise: string; sets: number }[]>(
    []
  );
  const [workoutStared, setWorkoutStarted] = useState(false);

  useEffect(() => {
    const storedWorkout = localStorage.getItem("workout");
    if (storedWorkout) {
      setWorkout(JSON.parse(storedWorkout));
    }
  }, []);

  const startWorkout = () => {
    setWorkoutStarted(true);
  };

  const endWorkout = () => {
    setWorkoutStarted(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {workoutStared ? (
        <div className="w-11/12 bg-slate-950 p-4 rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center mb-2">
            Workout Session
          </h1>
          {workout.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-center text-blue-500">
                {item.exercise}
              </h3>
              {[...Array(item.sets)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-2 my-2">
                  <p>{setIndex + 1} Set:</p>
                  <input
                    className="w-[6rem] p-1 rounded"
                    type="number"
                    placeholder="Weights"
                  />
                  <input
                    className="w-[6rem] p-1 rounded"
                    type="number"
                    placeholder="Reps"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out p-1 rounded">
                    Save Set
                  </button>
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={endWorkout}
            className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded mt-4"
          >
            End Workout
          </button>
        </div>
      ) : (
        <div className="w-11/12 bg-slate-950 p-4 rounded-lg flex flex-col">
          <h1 className="text-2xl font-bold text-center mb-2">
            Your Workout Routine
          </h1>
          {workout.map((item, index) => (
            <div
              key={index}
              className="flex justify-between my-1 py-1 px-2 bg-blue-500/20 hover:bg-blue-500/30 rounded"
            >
              <p>
                {index + 1}. Exercise: {item.exercise}
              </p>
              <p>Sets: {item.sets}</p>
            </div>
          ))}
          <button
            onClick={startWorkout}
            className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded mt-4"
          >
            Start Workout
          </button>
        </div>
      )}
    </div>
  );
};

export default PageWorkout;

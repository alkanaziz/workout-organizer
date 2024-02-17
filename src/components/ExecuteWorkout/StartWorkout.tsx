import { useContext } from "react";
import { AppContext } from "../../AppContext";

const StartWorkout = () => {
  const { workout, endWorkout } = useContext(AppContext);
  return (
    <div className="w-full bg-slate-950 p-4 rounded-lg flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-2">Workout Session</h1>
      {workout.map((item, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold text-center text-blue-500">
            {item.exercise}
          </h3>
          {[...Array(item.sets)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-2 my-2">
              <p>{setIndex + 1}.</p>
              <input
                className="w-[5rem] p-1 rounded text-slate-950 text-center"
                type="number"
                placeholder="Weights"
              />
              <input
                className="w-[5rem] p-1 rounded text-slate-950 text-center"
                type="number"
                placeholder="Reps"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded">
                Save
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
  );
};

export default StartWorkout;

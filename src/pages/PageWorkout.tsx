import { useEffect, useState } from "react";

const PageWorkout = () => {
  const [workout, setWorkout] = useState<{ exercise: string; sets: number }[]>(
    []
  );

  useEffect(() => {
    const storedWorkout = localStorage.getItem("workout");
    if (storedWorkout) {
      setWorkout(JSON.parse(storedWorkout));
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 bg-slate-950 p-4 rounded-lg flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-2">Your Workout</h1>
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
        <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded mt-4">
          Start Workout
        </button>
      </div>
    </div>
  );
};

export default PageWorkout;

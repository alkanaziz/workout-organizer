import { useState, useEffect } from "react";
import muscleGroups from "../data/muscleGroups.json";
// import { IWorkout } from "../interfaces";
import { ISet } from "../interfaces";
import axios from "axios";

const backendUrl = "http://localhost:3501";

const CreateWorkout = () => {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState<ISet[]>([]);
  const [addedExercises, setAddedExercises] = useState<
    { exercise: string; sets: number }[]
  >([]);
  //   const [workouts, setWorkouts] = useState<IWorkout>([]);

  const handleAddExercise = () => {
    if (selectedExercise === "" && sets === "") {
      return alert("Please select an exercise and enter the number of sets.");
    } else if (sets === "" && selectedExercise !== "") {
      return alert("Please enter the number of sets.");
    } else if (sets !== "" && selectedExercise === "") {
      return alert("Please select an exercise.");
    } else {
      setAddedExercises([
        ...addedExercises,
        { exercise: selectedExercise, sets: Number(sets) },
      ]);
      console.log(addedExercises);
      setSelectedExercise("");
      setSets("");
    }
  };

  //   useEffect(() => {
  //     (async () => {
  //       const response = await axios.get(`${backendUrl}/workouts`);
  //       const _workouts = response.data;
  //       setWorkouts(_workouts);
  //     })();
  //   }, []);

  const addWorkout = () => {
    (async () => {
      const workout = addedExercises;
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const response = await axios.post(`${backendUrl}/workouts`, workout, {
          headers,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
    alert("Workout created successfully!");
  };

  return (
    <>
      <div className="w-full flex flex-col items-center bg-slate-950 rounded-lg p-4">
        <h2 className="text-2xl md:text-3xl font-bold">Create your Workout</h2>
        <ul className="my-4">
          {muscleGroups.map((muscleGroup) => (
            <li className="my-1" key={muscleGroup.id}>
              <p className="font-medium text-lg">{muscleGroup.name}</p>
              <div className="flex gap-2">
                <select
                  className="text-slate-950 w-[10rem] p-1 px-4 rounded"
                  value={selectedExercise}
                  onChange={(e) => setSelectedExercise(e.target.value)}
                >
                  <option className="bg-blue-50">Choose...</option>
                  {muscleGroup.exercises.map((exercise) => {
                    return <option key={exercise.id}>{exercise.name}</option>;
                  })}
                </select>
                <input
                  className="w-[3rem] p-1 rounded text-slate-950 outline-none"
                  type="text"
                  placeholder="Sets"
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded"
                  onClick={handleAddExercise}
                >
                  Add
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-slate-950 p-4 mx-auto my-6 rounded-lg flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Selected Exercises:
        </h2>
        <div className="w-4/5 md:w-1/2 mx-auto my-4">
          {addedExercises.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-between bg-blue-500/20 hover:bg-blue-500/30 py-1 px-2 my-1 rounded"
            >
              <p>{item.exercise}</p>
              <p>{item.sets} Sets</p>
            </div>
          ))}
        </div>
        <button
          onClick={addWorkout}
          className="w-4/5 mx-auto bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded"
        >
          Create Workout
        </button>
      </div>
    </>
  );
};

export default CreateWorkout;

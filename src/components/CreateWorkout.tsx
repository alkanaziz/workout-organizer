import exercises from "../data/exercises.json";

const CreateWorkout = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold">Create your Workout</h1>
      <ul className="my-4">
        {exercises.map((muscleGroup) => (
          <li className="my-1" key={muscleGroup.id}>
            <p className="font-medium text-lg">{muscleGroup.name}</p>
            <div className="flex gap-2">
              <select className="text-slate-950 w-[10rem] p-1 px-4 rounded">
                {muscleGroup.exercises.map((exercise) => {
                  return <option key={exercise.id}>{exercise.name}</option>;
                })}
              </select>
              <input
                className="w-[3rem] p-1 rounded text-slate-950 outline-none"
                type="text"
                placeholder="Sets"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out py-1 px-2 rounded">
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateWorkout;

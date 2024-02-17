import { useContext } from "react";
import { AppContext } from "../AppContext";
import { StartWorkout, EndWorkout } from "../components";

const PageWorkout = () => {
  const { workoutStarted } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col items-center">
      {workoutStarted ? <StartWorkout /> : <EndWorkout />}
    </div>
  );
};

export default PageWorkout;

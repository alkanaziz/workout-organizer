import React, { createContext, useEffect, useState } from "react";

interface IAppContext {
  workout: { exercise: string; sets: number }[];
  workoutStarted: boolean;
  startWorkout: () => void;
  endWorkout: () => void;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [workout, setWorkout] = useState<{ exercise: string; sets: number }[]>(
    []
  );
  const [workoutStarted, setWorkoutStarted] = useState(false);

  useEffect(() => {
    const storedWorkout = localStorage.getItem("workout");
    if (storedWorkout) {
      setWorkout(JSON.parse(storedWorkout));
    }
  }, []);

  const startWorkout = () => {
    setWorkoutStarted(() => true);
  };

  const endWorkout = () => {
    setWorkoutStarted(() => false);
  };

  return (
    <AppContext.Provider
      value={{
        workout,
        workoutStarted,
        startWorkout,
        endWorkout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

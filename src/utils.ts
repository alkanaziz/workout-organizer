import { IFormMuscleGroup, IMuscleGroup } from "./interfaces";

export const createFormMuscleGroups = (
  muscleGroups: IMuscleGroup[]
): IFormMuscleGroup[] => {
  return muscleGroups.map((muscleGroup) => {
    return {
      ...muscleGroup,
      selectedExercise: muscleGroup.exercises[0],
      numberOfSets: 3,
    };
  });
};

export interface IMuscleGroup {
  id: number;
  name: string;
  exercises: IExercise[];
}

export interface IExercise {
  id: number;
  name: string;
}

export interface IFormMuscleGroup extends IMuscleGroup {
  selectedExercise: IExercise;
  numberOfSets: number;
}


export interface ExerciseLoad {
    reps: number;
    sets: number;
    weight: number;
    isBodyWeight: boolean;
}

export interface Exercice {
    exerciseId: string;
    name: string;
    link: string;
    description: string;
    load: ExerciseLoad;
}
export interface Workout {
    title: string;
    description: string;
    link: string;
    exercises: Exercice[]
}
export interface Plan {
    title: string;
    notes: string;
    workouts: Workout[]
}
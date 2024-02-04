
export interface ExerciseLoad {
    reps: number;
    sets: number;
    weight: number;
    isBodyWeight: boolean;
}

export interface Exercise {
    exerciseId: string;
    name: string;
    link: string;
    description: string;
    reps: number;
    sets: number;
    weight: number;
    isBodyWeight: boolean;
}
export interface Workout {
    title: string;
    description: string;
    link: string;
    exercises: Exercise[]
}
export interface Plan {
    title: string;
    notes: string;
    workouts: Workout[]
}
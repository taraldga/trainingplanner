
export interface WorkoutSummary {
    title: string;
    description: string;
    link: string;
}
export interface Plan {
    title: string;
    notes: string;
    weeks: WorkoutSummary[][]
}
import { Workout } from "@/types/Plan";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { serialize } from "./serialize";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWorkoutLink(workout: object) {
  const stringData = JSON.stringify(workout);

  serialize({ exercises: workout } as Workout);
  return btoa(stringData);
}

export function createWorkoutFromLink(base64EncodedData: string) {
  const stringData = atob(base64EncodedData);
  return JSON.parse(stringData);
}

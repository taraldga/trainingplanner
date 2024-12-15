import { Workout } from "@/types/Plan";
import LZString from "lz-string";
import rison from "rison";

const serialize = (workout: Workout) => {
  if (!workout) {
    return;
  }

  if (!workout.exercises) return;
  console.log(workout);

  const lists = workout.exercises.map((exercise) => {
    return [
      exercise.title ?? "",
      exercise.description,
      exercise.link,
      exercise.sets,
      exercise.reps,
      exercise.isBodyWeight,
      exercise.weight,
    ];
  });
  const serializable = {
    title: "Somebody",
    description: "Once told me",
    exercises: lists,
  };
  workout.title = "Somebody";
  workout.description = "Once told me";

  console.log(serializable);
  console.log(workout);
  const encoded = rison.encode(serializable);

  console.log(encoded.length);
  console.log(LZString.compressToEncodedURIComponent(encoded).length);
  console.log(
    LZString.compressToEncodedURIComponent(rison.encode(workout)).length,
  );
};

export { serialize };

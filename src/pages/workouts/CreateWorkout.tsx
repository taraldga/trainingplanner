import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import StrengthWorkoutForm from "./StrengthWorkoutForm";
import { compress, createWorkoutLink } from "@/lib/utils";
import LZString from "lz-string";
import rison from "rison";
import { serialize } from "@/lib/serialize";
import { Workout } from "@/types/Plan";

const CreateWorkout = () => {
  const { control, register, handleSubmit, watch } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "exercises",
    },
  );

  const defaultExercise = {
    title: "",
    description: "",
    link: "",
    sets: 3,
    reps: 8,
    isBodyWeight: false,
    weight: 60,
  };

  const onSubmit = (data: object) => {
    serialize(data as Workout);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl">Creating workout</h1>
        {fields.map((field, idx) => {
          return (
            <StrengthWorkoutForm
              register={register}
              remove={remove}
              field={field}
              idx={idx}
              isBodyWeight={watch("exercises")[idx]?.isBodyWeight}
            />
          );
        })}
        <div className="mt-2 flex w-full justify-start">
          <Button
            variant={"secondary"}
            onClick={(e) => {
              e.preventDefault();
              append({ ...defaultExercise });
            }}
          >
            Add new exercise
          </Button>
          <Button className="ml-2" type="submit">
            Create link
          </Button>
        </div>
      </form>
      <div>
        Link: {window.location.href}/workout/display/
        {createWorkoutLink(watch("exercises"))}
      </div>
    </div>
  );
};

export default CreateWorkout;

import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import StrengthWorkoutForm from "./StrengthWorkoutForm";

const CreateWorkout = () => {
  const { control, register, handleSubmit, watch } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "exercises",
    }
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

  const onSubmit = (data: object) => console.log(data);

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
        <div className="w-full flex justify-start mt-2">
          <Button
            variant={"secondary"}
            onClick={() => append({ ...defaultExercise })}
          >
            Add new exercise
          </Button>
          <Button className="ml-2" type="submit">Create link</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkout;

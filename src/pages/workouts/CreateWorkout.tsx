import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import StrengthWorkoutForm from "./StrengthWorkoutForm";
import { Checkbox } from "@radix-ui/react-checkbox";

const CreateWorkout = () => {
  const { control, register, handleSubmit, watch } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "exercises",
    }
  );

  const defaultExercise = {
    title: "New Exercise", 
    description: "New description",
    link: "",
    sets: 3,
    reps: 8,
    isBodyWeight: false,
    weight: 60
  }

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
        <input type="submit" />
      </form>
      <Button
        onClick={() =>
          append({...defaultExercise})
        }
      >
        Add new exercise
      </Button>
    </div>
  );
};

export default CreateWorkout;

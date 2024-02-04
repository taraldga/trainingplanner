import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FieldValues,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";

type StrengthWorkoutFormProps = {
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  field: Record<"id", string>;
  idx: number;
  isBodyWeight: boolean;
};

const StrengthWorkoutForm = ({
  register,
  remove,
  field,
  idx,
  isBodyWeight,
}: StrengthWorkoutFormProps) => {
  return (
    <Card className="mt-2" key={field.id}>
      <CardHeader>
        <CardTitle>
          <label htmlFor="exercises.${idx}.title">Title</label>
          <Input
            id={`exercises.${idx}.description`}
            {...register(`exercises.${idx}.title`)}
            type="text"
          />
        </CardTitle>
        <CardDescription>
          <label htmlFor="exercises.${idx}.description">Description</label>
          <Input
            id={`exercises.${idx}.description`}
            {...register(`exercises.${idx}.description`)}
            type="text"
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <label htmlFor="exercises.${idx}.link">Link</label>
        <Input
          id={`exercises.${idx}.link`}
          {...register(`exercises.${idx}.link`)}
          type="text"
        />
        <div className="flex justify-around">
          <div className="w-1/2 p-2">
            <label htmlFor="exercises.${idx}.sets">Sets</label>
            <Input
              id={`exercises.${idx}.sets`}
              {...register(`exercises.${idx}.sets`)}
              type="number"
            />
            <label htmlFor="exercises.${idx}.reps">Reps</label>
            <Input
              id={`exercises.${idx}.reps`}
              {...register(`exercises.${idx}.reps`)}
              type="number"
            />
          </div>
          <div className="w-1/2 p-2">
            <input
              type="checkbox"
              id={`exercises.${idx}.isBodyWeight`}
              {...register(`exercises.${idx}.isBodyWeight`)}
            />
            <label className="ml-2" htmlFor="exercises.${idx}.isBodyWeight">
              Is Body Weight
            </label>
            <br />
            <label htmlFor="exercises.${idx}.weight">Weight</label>
            <Input
              id={`exercises.${idx}.weight`}
              disabled={isBodyWeight}
              {...register(`exercises.${idx}.reps`)}
              type="number"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"destructive"} onClick={() => remove(idx)}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StrengthWorkoutForm;

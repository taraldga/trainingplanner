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
import { Checkbox } from "@radix-ui/react-checkbox";
import { FieldValues, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";

type StrengthWorkoutFormProps = {
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  field: Record<"id", string>;
  idx: number;
};

const StrengthWorkoutForm = ({ register, remove, field, idx }: StrengthWorkoutFormProps) => {
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
        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <label htmlFor="exercises.${idx}.isBodyWeight">Reps</label>
        <Checkbox
          id={`exercises.${idx}.isBodyWeight`}
          {...register(`exercises.${idx}.isBodyWeight`)}
        />
        <label htmlFor="exercises.${idx}.isBodyWeight">Is Body Weight?</label>
        <Input
          id={`exercises.${idx}.weight`}
          {...register(`exercises.${idx}.reps`)}
          type="number"
        />
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

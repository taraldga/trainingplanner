import {useState} from "react";

interface Exercise {
    title: string,
    description: string
}

const CreateWorkout = () => {
    const [exercises, setExercices] = useState<Exercise[]>([]);

    const createEmptyExercise = () => {
        return {
            title: "",
            description: ""
        }
    }

    return (
        <div>
            <h1 className="text-2xl">Creating workout</h1>

            <button className="btn btn-primary" onClick={() => {
                setExercices([...exercises, createEmptyExercise()])
            }}> Create Exercise</button>
            {exercises.map(() => {
                return (
                    <div>
                        <p>Halla</p>
                        <input className="input input-primary" type="text" />
                        <textarea className="textarea textarea-primary"/>
                    </div>
                );
            })}
        </div>
    )
}

export default CreateWorkout;
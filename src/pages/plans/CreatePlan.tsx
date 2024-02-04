import {useState} from "react";
import {Plan} from "../../types/Plan.ts";

const CreatePlan = () => {
    const [weeks, setWeeks] = useState<Plan[]>([]);

    return (
        <div>
            <h1 className="text-xxl">Create plan</h1>
            {weeks.map(week => {

            })}
            <button className="btn btn-primary">Add week</button>
        </div>
    )
}

export default CreatePlan
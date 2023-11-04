import {useEffect, useState} from "react";
import {Plan} from "../../types/Plan.ts";
import {getExampleRunningData} from "../../util/data.ts";

const ViewPlan = () => {

    const [plan, setPlan] = useState<Plan>()

    useEffect(() => {
        setPlan(getExampleRunningData())
    }, [])

    if( plan === undefined ) return <div></div>
    return (

        <div className="w-8/12 mx-auto">
            <h1 className="text-4xl">{plan.title}</h1>
            <span className="text-lg">{plan.notes}</span>
            {plan.weeks.map((workouts,index) => {
                return (
                    <div tabIndex={0} className="collapse bg-base-200 mb-5">
                        <div className="collapse-title">
                            Week {index + 1}
                        </div>
                        <div className="collapse-content">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th>Workout #</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Link</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {workouts.map((workout, workoutNumber)=> {
                                        return (
                                            <tr className="bg-base-200">
                                                <th>{workoutNumber+1}</th>
                                                <td>{workout.title}</td>
                                                <td>{workout.description}</td>
                                                <td><a href={`${workout.description}`}>Workout</a></td>
                                            </tr>
                                        )
                                    }
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ViewPlan
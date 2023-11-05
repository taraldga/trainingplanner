import {createBrowserRouter} from "react-router-dom";
import CreateWorkout from "./pages/workouts/CreateWorkout.tsx";
import ViewWorkout from "./pages/workouts/ViewWorkout.tsx";
import ViewPlan from "./pages/plans/ViewPlan.tsx";
import CreatePlan from "./pages/plans/CreatePlan.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/workouts/new",
            element: <CreateWorkout />
        },
        {
            path: "/workouts/view",
            element: <ViewWorkout />
        },
        {
            path: "/plans/view",
            element: <ViewPlan />
        },
        {
            path: "/plans/new",
            element: <CreatePlan />
        }
    ]
)

export default router;
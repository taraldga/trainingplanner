import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import CreateWorkout from "./pages/workout/CreateWorkout.tsx";
import ViewWorkout from "./pages/workout/ViewWorkout.tsx";
import ViewPlan from "./pages/plan/ViewPlan.tsx";
import CreatePlan from "./pages/plan/CreatePlan.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
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
import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import CreateWorkout from "./pages/CreateWorkout.tsx";
import ViewWorkout from "./pages/ViewWorkout.tsx";

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
        }
    ]
)

export default router;
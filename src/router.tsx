import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import CreateWorkout from "./pages/CreateWorkout.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/workouts/new",
            element: <CreateWorkout />
        }
    ]
)

export default router;
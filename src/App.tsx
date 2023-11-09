import './App.css'
import router from "./router.tsx";
import {RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <>
            <Navbar />
            <div className="lg:w-8/12 w-10/12 mx-auto">
                <RouterProvider router={router}/>
            </div>
        </>
    )
}

export default App

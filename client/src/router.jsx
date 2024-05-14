import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/Errorpage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /> <Outlet /></>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
        }
        ]

    },
]);
export default router;
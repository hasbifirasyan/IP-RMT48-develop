import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/Errorpage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /> <Outlet /></>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/",
                element: <Home />
            },
        ]

    },
]);
export default router;
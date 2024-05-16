import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/Errorpage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NavbarUnlogin from "./components/NavbarUnlogin";
import Header from "./components/Header";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <><NavbarUnlogin /> <Login /></>
    },
    {
        path: "/register",
        element: <><NavbarUnlogin /> <Register /></>
    },{
        path: "/",
        element: <><Navbar /> <Outlet /></>,
        errorElement: <ErrorPage />,
        children: [      
            {
                path: "/",
                element: <Home />
            },
        ]

    },
]);
export default router;
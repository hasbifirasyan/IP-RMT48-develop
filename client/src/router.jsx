import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NavbarUnlogin from "./components/NavbarUnlogin";
import Header from "./components/Header";
import MyBookings from "./pages/MyBookings";


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
            {
                path: "/mybookings",
                element: <MyBookings />
            },
        ]

    },
]);
export default router;
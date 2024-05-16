import {
    Outlet,
    createBrowserRouter,redirect
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NavbarUnlogin from "./components/NavbarUnlogin";
import MyBookings from "./pages/MyBookings";


const router = createBrowserRouter([
    {
        path: "/login",
        loader: () => {
            let token = localStorage.getItem("access_token");
            if (!token) {
              return null
            }
            return redirect('/')
          },
        element: <><NavbarUnlogin /> <Login /></>
    },
    {
        path: "/register",
        element: <><NavbarUnlogin /> <Register /></>
    },{
        path: "/",
        loader: () => {
            let token = localStorage.getItem("access_token");
            if (!token) {
              return redirect('/login')
            }
            return null
          },
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
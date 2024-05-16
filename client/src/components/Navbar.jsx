import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import logo1 from "../assets/logo1.png";

export default function Navbar() {
    const navigate = useNavigate();

    const handleOnLogout = (event) => {
        event.preventDefault()

        try {
            localStorage.removeItem("access_token");
            Swal.fire("Logged Out!");
            navigate('/login')
        } catch (error) {
            console.log(error.response?.data.message || error.message)
            Swal.fire({
                title: "Error!",
                text: error.response?.data.message || error.message,
                icon: "error"
            });
        }

    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src={logo1} alt="logo1" className="navbar-logo w-2" style={{ width: '100px', height: 'auto' }} />
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link ms-3">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-3">My Bookings</Link>
                    </li>
                </ul>
                <div className="profile-container"></div>
                <button onClick={handleOnLogout} type="button" className="btn btn-success me-2">
                    Logout
                </button>
            </div>
        </nav>

    )
}
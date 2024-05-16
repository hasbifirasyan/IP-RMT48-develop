import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import logo1 from "../assets/logo1.png";

export default function NavbarUnlogin() {


    return (
        <nav className="navbar navbar-expand-sm bg-white navbar-dark fixed-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src={logo1} alt="logo1" className="navbar-logo w-2" style={{ width: '100px', height: 'auto' }} />
                    </li>
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link ms-3 text-black">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                </ul>
                
                
                <div className="profile-container"></div>
            </div>
        </nav>

    )
}
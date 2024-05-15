import { Link } from "react-router-dom"
import logo1 from "../assets/logo1.png"
export default function Navbar() {
    return (
     
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src={logo1} alt="logo1" className="navbar-logo w-2" style={{ width: '100px', height: 'auto' }} />
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-3">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
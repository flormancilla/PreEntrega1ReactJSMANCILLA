import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={"/"} className="navbar-brand" style={{ color: '#EE0000' }}>Tienda Rookies</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/category/gorras"} className="nav-link" aria-current="page">Gorras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/remeras"} className="nav-link" >Remeras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/mini-cascos"} className="nav-link">Mini Cascos</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to={"/"} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Escuderias
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to={"/"} className="dropdown-item">AlfaRomeo</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">AlphaTauri</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Alpine</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">AstonMartin</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Ferrari</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Haas</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">McLaren</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Mercedes</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">RedBull</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Williams</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
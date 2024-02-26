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
                        <li className="nav-item dropdown">
                            <NavLink to={"/escuderia"} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Escuderias
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to={"/escuderia/Alfa-Romeo"} className="dropdown-item">Alfa Romeo</NavLink></li>
                                <li><NavLink to={"/escuderia/AlphaTauri"} className="dropdown-item">AlphaTauri</NavLink></li>
                                <li><NavLink to={"/escuderia/Alpine"} className="dropdown-item">Alpine</NavLink></li>
                                <li><NavLink to={"/escuderia/Aston-Martin"} className="dropdown-item">Aston Martin</NavLink></li>
                                <li><NavLink to={"/escuderia/Ferrari"} className="dropdown-item">Ferrari</NavLink></li>
                                <li><NavLink to={"/escuderia/Haas"} className="dropdown-item">Haas</NavLink></li>
                                <li><NavLink to={"/escuderia/McLaren"} className="dropdown-item">McLaren</NavLink></li>
                                <li><NavLink to={"/escuderia/Mercedes"} className="dropdown-item">Mercedes</NavLink></li>
                                <li><NavLink to={"/escuderia/RedBull"} className="dropdown-item">RedBull</NavLink></li>
                                <li><NavLink to={"/escuderia/Williams"} className="dropdown-item">Williams</NavLink></li>
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
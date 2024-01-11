import CartWidget from "./CartWidget";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: '#EE0000' }}>Tienda Rookies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Gorras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Remeras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mini Cascos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Escuderias
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">AlfaRomeo</a></li>
                                <li><a className="dropdown-item" href="#">AlphaTauri</a></li>
                                <li><a className="dropdown-item" href="#">Alpine</a></li>
                                <li><a className="dropdown-item" href="#">AstonMartin</a></li>
                                <li><a className="dropdown-item" href="#">Ferrari</a></li>
                                <li><a className="dropdown-item" href="#">Haas</a></li>
                                <li><a className="dropdown-item" href="#">McLaren</a></li>
                                <li><a className="dropdown-item" href="#">Mercedes</a></li>
                                <li><a className="dropdown-item" href="#">RedBull</a></li>
                                <li><a className="dropdown-item" href="#">Williams</a></li>
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
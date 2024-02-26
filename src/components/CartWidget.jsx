import { useContext } from "react";
import IconoCarrito from "../assets/images/carrito-de-compras.png"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { CantTotalProductos } = useContext(CartContext);

  return (
    CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-primary position-relative">
      <img src={IconoCarrito} alt="Carro de compras" width={30} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {CantTotalProductos()}</span>
    </Link> : ""
  )
}

export default CartWidget;
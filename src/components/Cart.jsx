import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import cesto from "../assets/images/cesto.svg";



const Cart = () => {
    const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <p className="col text-center">Aun no se encuentran productos en tu carrito.</p>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <Link to={"/"} class="btn btn-primary" type="button">Volver a la página principal</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1 className="col text-center">Productos seleccionados</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} className="btn btn-primary">Vaciar Carrito <img src={cesto} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                            </tr>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td><img src={product.image} alt={product.description} width={75}></img></td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                    <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={cesto} alt="eliminar producto" /></a></td>
                                </tr>
                            )}
                            <tr>
                                 <td colSpan={4}>Total</td>
                                <td>${SumaTotalProductos()}</td>
                                <td><Link to={"/checkout"} className="btn btn-danger">Confirmar compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="d-grid gap-2">
                <Link to={"/"} class="btn btn-primary" type="button">Volver a la página principal</Link>
            </div>
        </div>
    )
}

export default Cart;
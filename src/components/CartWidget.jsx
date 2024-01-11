import IconoCarrito from "../assets/images/carrito-de-compras.png"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary position-relative">
        <img src={IconoCarrito} alt="Carro de compras" width={30}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
  </span>
</button>
    )
}

export default CartWidget;
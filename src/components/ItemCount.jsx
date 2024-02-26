import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(0);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false)

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div className="row">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
            <div>
                {itemAdded ? <Link to={"/cart"} type="button" className="btn btn-danger">Terminar mi compra</Link>: <button type="button" className="btn btn-danger" onClick={addToCart}>Agregar al carrito</button>}
            </div>
        </div>
    )
}

export default ItemCount;
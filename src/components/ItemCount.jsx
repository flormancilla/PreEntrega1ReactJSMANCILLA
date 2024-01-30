import { useEffect, useState } from "react"

const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter)
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
                <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
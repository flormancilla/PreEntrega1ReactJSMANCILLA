import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div>
            <div className="container">
                <div className="row row-detalle">
                    <img src={item.image} className="card-img-top" alt={item.description} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-price">${item.price}</p>
                        <ItemCount stock={parseInt(item.stock)} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
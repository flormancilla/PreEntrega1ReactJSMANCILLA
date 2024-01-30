import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                <img src={item.image} className="card-img-top" alt={item.description}/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-price">${item.price}</p>
                    <ItemCount stock={parseInt(item.stock)}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail;
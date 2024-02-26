import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <Link to={"/item/" + item.id}>
                    <img src={item.image} className="img-fluid" alt={item.title} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;

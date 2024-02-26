import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs,addDoc } from "firebase/firestore";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Escuderia = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

   
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("escuderia", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));

        });
    }, [id])

    return (
        <div>
            {loading ? <Loading/> : <ItemList items={items} />}
        </div>
    )
}

export default Escuderia;
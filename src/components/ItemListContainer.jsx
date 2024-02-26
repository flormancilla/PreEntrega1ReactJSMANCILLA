import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs,addDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
    //         }, 2000);
    //     })
    //     promesa.then(data => {
    //         setItems(data)
    //         console.log(data)
    //     })
    // }, [id]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     arrayProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Todo OK")
    // }, []);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
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

export default ItemListContainer;
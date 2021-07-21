import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { getFirebase, getFirestore } from "../../firebase/client";

export const ItemListContainer = (props) => {
    const { listProducts } = useContext(ShopContext);
    const { category } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    useEffect(() => {
        setLoaded(false);

        if (category) {
            let aux = listProducts.filter((element) => element.category === category);
            setFilterProducts(aux)

            //UNICAMENTE PARA DESAFIO - TRAIGO CATEGORY DESDE EL CONTEXT
            // async function getCategoryBD() {
            //     const DB = getFirestore();
            //     const COLLECTION = await DB.collection("productos");
            //     const RESPONSE = await COLLECTION.where("category", "==", category).get();
            //     console.log(RESPONSE);
            //     setFilterProducts(RESPONSE.docs.map((element) => element.data()));
            setLoaded(true);
            // }
            // getCategoryBD()
        } else {
            setLoaded(true);
            setFilterProducts(listProducts);
        }
    }, [listProducts, category]);

    return (
        <>
            {category ? (
                <h1 className="text-center my-5">{props.greeting.saludo + category}</h1>
            ) : (
                <h1 className="text-center my-5">{props.greeting.saludo}</h1>
            )}

            {loaded ? (
                <div>
                    <ItemList products={filterProducts} />
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    <Spinner align="center" animation="border" variant="info" />
                </div>
            )}
        </>
    );
};

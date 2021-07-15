import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { getFirestore } from "../../firebase/client";

export const ItemListContainer = (props) => {
    const { listProducts } = useContext(ShopContext);
    const { category } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    useEffect(() => {
        setLoaded(false);

        if (category) {
            let aux = listProducts.filter((element) => element.category === category);
            console.log(aux);
            setFilterProducts(aux);
            setLoaded(true);
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

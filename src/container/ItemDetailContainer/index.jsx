import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import { Spinner } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContext";

export const ItemDetailContainer = ({ greeting }) => {
    const { id } = useParams();

    const { listProducts } = useContext(ShopContext);

    const [item, setItem] = useState({});

    useEffect(async () => {
        let aux = listProducts.find((element) => element.id === parseInt(id));
        setItem(aux);
    }, [id]);

    return (
        <>
            {Object.keys(item).length != 0 ? (
                <>
                    {" "}
                    <h1 className="text-center my-3"> {greeting.saludo + item.title} </h1>
                </>
            ) : (
                ""
            )}

            {Object.keys(item).length != 0 ? (
                <ItemDetailComponent product={item} />
            ) : (
                <div className="d-flex justify-content-center mt-2">
                    <Spinner align="center" animation="border" variant="info" />
                </div>
            )}
        </>
    );
};

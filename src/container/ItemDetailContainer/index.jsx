import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import { Spinner } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContext";
import { getFirestore } from "../../firebase/client";

export const ItemDetailContainer = ({ greeting }) => {
    const { id } = useParams();

    const { listProducts } = useContext(ShopContext);

    const [item, setItem] = useState({});

    useEffect(async () => {
        // let aux = listProducts.find((element) => element.id === id);

        //UNICAMENTE PARA DESAFIO - TRAIGO ITEM POR ID DE FIREBASE
        const DB = getFirestore();
        const COLLECTION = DB.collection("productos");
        const RESPONSE = await COLLECTION.doc(id).get();

        let aux = RESPONSE.data();
        // console.log(RESPONSE.data());
        // setItem(RESPONSE);

        setItem(aux);
    }, [id]);

    return (
        <>
            {item ? (
                <>
                    <h1 className="text-center my-3"> {greeting.saludo + item.title} </h1>
                </>
            ) : (
                ""
            )}

            {item != 0 ? (
                <ItemDetailComponent product={item} />
            ) : (
                <div className="d-flex justify-content-center mt-2">
                    <Spinner align="center" animation="border" variant="info" />
                </div>
            )}
        </>
    );
};

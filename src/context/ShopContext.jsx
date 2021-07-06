import { useEffect, useState, createContext } from "react";
import { getFirestore } from "../firebase/client";

export const ShopContext = createContext({});

export const ShopComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);

    const [listProducts, setListProducts] = useState([]);

    //Funcion de añadir a carrito

    //Verifica si ya existe !
    const isInCart = (id) => cart.find((element) => element.item.id === id);
    const isInFav = (id) => fav.find((element) => element.id === id);

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem(cart);
    };

    const clearFav = () => {
        setFav([]);
        localStorage.remoItem(fav);
    };

    const removeItem = (product) => {
        let newCart = [];
        cart.map((element) => {
            if (element !== product) {
                newCart = [...newCart, element];
            }
        });
        setCart(newCart);
    };

    const removeItemFav = (product) => {
        let aux = [];
        fav.map((element) => {
            if (element !== product) {
                aux = [...aux, element];
            }
        });
        setFav(aux);
    };

    function addToCart(item, cantidad) {
        if (isInCart(item.id)) {
            const newCart = cart.map((element) => {
                if (element.item.id === item.id) {
                    return { ...element, cantidad: element.cantidad + cantidad };
                } else return element;
            });
            setCart(newCart);
        } else setCart([...cart, { item, cantidad }]);
    }

    function addToFav(product) {
        if (isInFav(product.id)) {
            console.log("ya hay uno");
        } else setFav([...fav, product]);
    }

    useEffect(() => {
        async function getDataFromJson() {
            const RESPONSE = await fetch("/json/mates.json");
            const DATA = await RESPONSE.json();
            setListProducts(DATA);
        }
        getDataFromJson();

        const localCart = localStorage.getItem("cart");
        if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
        else setCart(JSON.parse(localCart));

        const localFav = localStorage.getItem("fav");
        if (!localFav) localStorage.setItem("fav", JSON.stringify([]));
        else setFav(JSON.parse(localFav));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("fav", JSON.stringify(fav));
    }, [cart, fav]);

    // useEffect(() => {
    //     localStorage.setItem("fav", JSON.stringify(fav));
    // }, [fav]);

    // useEffect(() => {
    //     async function getData() {
    //         const DB = getFirestore();
    //         const COLLECTION = DB.collection("productos");
    //         const RESPONSE = await COLLECTION.get();
    //         // console.log(RESPONSE.docs.map((element) => element.data()));

    //          //POR 1 ITEM
    //         // const RESPONSE = await COLLECTION.doc("TfLzkO482qMmXOsGIDhX").get();
    //         // console.log(RESPONSE.data());

    //         //FILTROS
    //         // const RESPONSE = await COLLECTION.where("stock", "!=", 0).get();
    //         // console.log(RESPONSE.docs.map((element) => element.data()));

    //         //ALMACENAR EL ID
    //         // RESPONSE.docs.map((element) => {
    //         //     console.log({ id: element.id, ...element.data() });
    //         // });

    //
    //     }
    //     getData();
    // }, []);

    return (
        <ShopContext.Provider
            value={{
                cart,
                listProducts,
                addToCart,
                clearCart,
                removeItem,
                fav,
                addToFav,
                clearFav,
                removeItemFav,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

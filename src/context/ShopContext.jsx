import { useEffect, useState, createContext } from "react";
import { getFirestore } from "../firebase/client";

export const ShopContext = createContext({});
// export const useCartContext = () => useContext(ShopContext)

export const ShopComponentContext = ({ children }) => {
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);
    const [itemsTotal, setItemsTotal] = useState(0);

    const getTotal = () => {
        let aux = cart.reduce((acc, item) => {
            return (acc = acc + item.item.price * item.cantidad);
        }, 0);
        return aux;
    };

    //Funcion de añadir a carrito
    //Verifica si ya existe !
    const isInCart = (id) => cart.find((element) => element.item.id === id);
    const isInFav = (id) => fav.find((element) => element.id === id);

    function addToCart(item, cantidad) {
        if (isInCart(item.id)) {
            const newCart = cart.map((element) => {
                if (element.item.id === item.id) {
                    if (element.item.stock >= element.cantidad + cantidad) {
                        return { ...element, cantidad: element.cantidad + cantidad };
                    } else {
                        alert(
                            `Ya has agregado el maximo stock disponible (${element.item.stock} unidades)`
                        );
                        return { ...element, cantidad: element.item.stock };
                    }
                } else return element;
            });
            setCart(newCart);
        } else setCart([...cart, { item, cantidad }]);
    }
    const removeItem = (product) => {
        let newCart = [];
        cart.map((element) => {
            if (element !== product) {
                newCart = [...newCart, element];
            }
        });
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem(cart);
    };
    function addToFav(product) {
        if (isInFav(product.id)) {
            //intentar agregar una notificacion!

            console.log("Ya se encuentra cargado a favs");
        } else setFav([...fav, product]);
    }

    const removeItemFav = (product) => {
        let aux = [];
        fav.map((element) => {
            if (element !== product) {
                aux = [...aux, element];
            }
        });
        setFav(aux);
    };

    const clearFav = () => {
        setFav([]);
        localStorage.remoItem(fav);
    };

    const addOne = (productCart, cantidad) => {
        let newCart = cart.map((element) => {
            if (element.item.id === productCart.id) {
                if (element.item.stock > cantidad) {
                    return { ...element, cantidad: element.cantidad + 1 };
                } else {
                    alert(`Solo hay disponible ${element.item.stock} unidades`);
                    return element;
                }
            } else return element;
        });
        setCart(newCart);
    };

    const substractOne = (productCart, cantidad) => {
        let newCart = cart.map((element) => {
            if (element.item.id === productCart.id) {
                if (cantidad > 0) {
                    return { ...element, cantidad: element.cantidad - 1 };
                } else return element;
            } else return element;
        });
        setCart(newCart);
    };

    useEffect(() => {
        async function getData() {
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos");
            const RESPONSE = await COLLECTION.get();

            if (RESPONSE.size === 0) {
                console.log("No hay productos en la base de datos")
            } else {
                console.log(`Existen ${RESPONSE.size} productos en la base de datos`)
                let aux = RESPONSE.docs.map((element) => {
                    return { id: element.id, ...element.data() };
                })
                setListProducts(aux);
            }

            // setListProducts(RESPONSE.docs.map((doc) => doc.data()));
            // console.log(RESPONSE.docs.map((element) => element.data()));

            //POR 1 ITEM
            // const RESPONSE = await COLLECTION.doc("3wHw0RWkcrtKFYbGgzli").get();
            // console.log(RESPONSE.data());

            //FILTROS
            // const RESPONSE = await COLLECTION.where("stock", "!=", 0).get();
            // console.log(RESPONSE.docs.map((element) => element.data()));

            //ALMACENAR EL ID
            // RESPONSE.docs.map((element) => {
            //     console.log({ idd: element.id, ...element.data() });
            // });
        }

        getData();

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

        let aux = cart.reduce((acc, element) => {
            return (acc = acc += element.cantidad);
        }, 0);
        setItemsTotal(aux);
    }, [cart, fav]);

    return (
        <ShopContext.Provider
            value={{
                cart,
                fav,
                listProducts,

                addToCart,
                clearCart,
                removeItem,

                addToFav,
                clearFav,
                removeItemFav,

                getTotal,
                itemsTotal,

                addOne,
                substractOne,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

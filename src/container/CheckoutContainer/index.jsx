import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

import "./styles.scss";

export const CheckoutContainer = () => {
    const { cart, clearCart, removeItem, getTotal, addOne, substractOne } = useContext(ShopContext);

    return (
        <>
            {cart.length !== 0 ? (
                cart.map((product) => {
                    return (
                        <div className="container d-flex flex-column flex-md-row  justify-content-center align-items-center my-2">
                            <div className="col-8 col-md-2 p-0">
                                <img src={product.item.pictureURL} alt="" />
                            </div>

                            <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center  col-8 col-md-2 py-2 ">
                                <div className="text-center">Producto: {product.item.title}</div>
                            </div>

                            <div className="d-flex flex-row justify-content-center justify-content-md-start align-ite   ms-center  col-8 col-md-2 py-2 ">
                                <div>Precio: ${product.item.price}</div>
                            </div>

                            <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                                <div className="d-flex flex-row w-75 justify-content-around align-items-center p-0 ">
                                    <button
                                        className="btn btn-success d-flex align-items-center h-10"
                                        onClick={() => addOne(product.item, product.cantidad)}
                                    >
                                        +
                                    </button>
                                    <div className="d-flex align-items-center text-center">
                                        {product.cantidad}
                                    </div>
                                    <button
                                        className="btn btn-danger d-flex align-items-center h-10"
                                        onClick={() => substractOne(product.item, product.cantidad)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>

                            <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                                <div className=" col-auto d-flex align-items-center">
                                    <button
                                        className="btn btn-danger d-flex align-items-center h-10 m-1"
                                        onClick={() => {
                                            removeItem(product);
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="inline-block d-flex justify-content-center mt-5">
                    <p>
                        No hay productos en el carrito! Haz click para ver los mates!
                        <Link to="/">
                            <button className="mx-1">Listado</button>
                        </Link>
                    </p>{" "}
                </div>
            )}
            <div className="container d-flex justify-content-end">Total: ${getTotal()}</div>
            <div className="container d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => clearCart()}>
                    {" "}
                    LIMPIAR CARRITO{" "}
                </button>
            </div>
        </>
    );
};

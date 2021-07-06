import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";

import "./styles.scss";

export const CheckoutContainer = () => {
    const { cart, setCart, clearCart, removeItem } = useContext(ShopContext);

    return (
        <>
            {cart.map((product) => {
                return (
                    <div className="container d-flex flex-column flex-md-row  justify-content-center align-items-center my-2">
                        <div className="col-8 col-md-2 p-0">
                            <img src={product.item.pictureURL} alt="" />
                        </div>

                        <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center  col-8 col-md-2 py-2 ">
                            <div className="text-center">Producto: {product.item.title}</div>
                        </div>

                        <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center  col-8 col-md-2 py-2 ">
                            <div>Precio: ${product.item.price}</div>
                        </div>

                        <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                            <div className="col-6 col-md-4 d-flex flex-row justify-content-around align-items-center py-2 ">
                                <button className="btn btn-success d-flex align-items-center h-10">
                                    +
                                </button>
                                <div className="d-flex align-items-center">{product.cantidad}</div>
                                <button className="btn btn-danger d-flex align-items-center h-10">
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                            <div className=" col-auto d-flex align-items-center">
                                <button
                                    className="btn btn-danger d-flex align-items-center h-10 m-1"
                                    onClick={() => {
                                        console.log("eliminado");
                                        removeItem(product);
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <button onClick={() => clearCart()}> LIMPIAR CARRITO </button>
        </>
    );
};

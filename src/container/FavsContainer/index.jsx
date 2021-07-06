import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export const FavsContainer = () => {
    const { fav, removeItemFav } = useContext(ShopContext);

    return (
        <>
            {fav.map((element) => {
                return (
                    <div className="container d-flex flex-column flex-md-row  justify-content-center align-items-center my-2">
                        <div className="col-8 col-md-2 p-0">
                            <img src={element.pictureURL} alt="" />
                        </div>

                        <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center  col-8 col-md-2 py-2 ">
                            <div className="text-center">Producto: {element.title}</div>
                        </div>

                        <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center  col-8 col-md-2 py-2 ">
                            <div>Precio: ${element.price}</div>
                        </div>

                        <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                            <div className="col-autos d-flex align-items-center">
                                <button
                                    className="btn btn-danger d-flex align-items-center h-10 m-1"
                                    onClick={() => {
                                        console.log("eliminado");
                                        removeItemFav(element);
                                    }}
                                >
                                    Eliminar
                                </button>

                                <Link to={`/item/${element.id}`}>
                                    <>
                                        <button className="btn btn-dark mt-1 w-100" type="submit">
                                            Ver Producto
                                        </button>
                                    </>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

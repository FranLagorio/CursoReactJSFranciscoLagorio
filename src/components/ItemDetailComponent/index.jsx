import React from "react";
import { ItemCount } from "../ItemCount";
import { onAdd } from "../../utils/const";

import "./styles.scss";

export const ItemDetailComponent = ({ product }) => {
    // Prueba de desestructuracion de objeto
    // {product.prueba = "hola"}
    // prueba

    return (
        <>
            <div className="card m-auto my-2 w-50 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <img className="card-img-top w-50 " src={product.pictureURL} alt="imagenMate" />

                <div className="w-50">
                    <div className="card-body w-100 m-auto ">
                        <h5 className="card-title text-center   "> {product.title}</h5>

                        {product.price !== "" && <p className="card-text text-center"> ${product.price} </p>}

                        <p className="card-text text-center"> Stock: {product.stock} </p>

                        <p className="card-text text-center"> Descripcion: {product.description} </p>
                        {/* <p className="card-text"> Descripcion: {product.prueba} </p> */}

                        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </>
    );
};

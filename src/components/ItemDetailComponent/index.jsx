import React from "react";
import { ItemCount } from "../ItemCount"
import {onAdd} from "../../utils/const"

import "./styles.scss"

export const ItemDetailComponent = ({product}) => {

  return (
    <>
      
      <div className="card col-sm-12 col-md-3 m-2 w-75 d-flex flex-row  justify-content-center align-content-center">
                <img className="card-img-top w-50" src={product.pictureURL} alt="imagenMate" />
                
                <div className="card-body w-50 m-auto">
                    <h5 className="card-title"> {product.title}</h5>

                    {product.price !== "" && <p className="card-text"> ${product.price} </p>}

                    <p className="card-text"> Stock: {product.stock} </p>

                    <p className="card-text"> Descripcion: {product.description} </p>

                    <ItemCount  stock={product.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
    </>
  );
};

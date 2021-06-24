import "./styles.scss";
import { ItemCount } from "../ItemCount";

export const CardComponent = ({product}) => {

    // Consulta si hay stock para no poner un 0
    if (product.stock === "A consultar") {
    } else {
        product.stock = parseInt(product.stock);
    }

    const onAdd =(x) => {
        alert(`Has agregado ${x} productos al carrito`)
    }

    return (
        <>
            <div className="card col-sm-12 col-md-3 m-1 ">
                <img className="card-img-top" src={product.pictureURL} alt="imagenMate" />
                <div className="card-body w-100">
                    <h5 className="card-title"> {product.title}</h5>

                    {product.price !== "" && <p className="card-text"> ${product.price} </p>}

                    <p className="card-text"> Stock: {product.stock} </p>

                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />

                    
                </div>
            </div>
        </>
    );
};

// <img className="card-img-top" src={props.ruta || "/images/mateImperial.jpg" }  alt='imagenMate' />

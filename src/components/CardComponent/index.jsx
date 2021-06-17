import "./styles.scss";
import { ItemCount } from "../ItemCount";

export const CardComponent = ({
    ruta = "./images/mateDefault.png",
    title = "Ups! No debe quedar mas stock",
    price = "",
    stock = "A consultar",
}) => {
    // Consulta si hay stock para no poner un 0
    if (stock === "A consultar") {
    } else {
        stock = parseInt(stock);
    }

    const onAdd =(x) => {
        alert(`Has agregado ${x} productos al carrito`)
    }

    return (
        <>
            <div className="card col-sm-12 col-md-3 m-1 ">
                <img className="card-img-top" src={ruta} alt="imagenMate" />
                <div className="card-body w-100">
                    <h5 className="card-title"> {title}</h5>

                    {price !== "" && <p className="card-text"> ${price} </p>}

                    <p className="card-text"> Stock: {stock} </p>

                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />

                    
                </div>
            </div>
        </>
    );
};

// <img className="card-img-top" src={props.ruta || "/images/mateImperial.jpg" }  alt='imagenMate' />

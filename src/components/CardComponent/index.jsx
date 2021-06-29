import "./styles.scss";
import { ItemCount } from "../ItemCount";
import { onAdd } from "../../utils/const"
import { Link } from "react-router-dom"

export const CardComponent = ({ product }) => {


    return (
        <>
            <div className="card col-sm-12 col-md-3 m-2 texto22px ">
                {/* <Link to={`/${product.category}/${product.id}`}> */}
                <Link to={`/item/${product.id}`}>
                    <img className="card-img-top" src={product.pictureURL} alt="imagenMate" />
                </Link>
                <div className="card-body w-100 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title texto22px"> {product.title}</h5>

                    {product.price !== "" && <p className="card-text my-1"> ${product.price} </p>}

                    <p className="card-text texto16px my-0 text-danger"> Stock: {product.stock} </p>

                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                </div>

            </div>
        </>
    );
};


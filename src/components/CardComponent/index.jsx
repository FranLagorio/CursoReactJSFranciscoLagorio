import "./styles.scss";
import { ItemCount } from "../ItemCount";
import { onAdd } from "../../utils/const";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const CardComponent = ({ product }) => {
    const { addToCart, addToFav } = useContext(ShopContext);
    //Esto lo trae como objeto
    // const state = useContext(ShopContext)

    const onAdd = (cantidad) => addToCart(product, cantidad);

    return (
        <>
            <div className="card col-sm-12 col-md-2 m-2 texto22px p-0 ">
                {/* <Link to={`/${product.category}/${product.id}`}> */}
                <Link to={`/item/${product.id}`}>
                    <img className="card-img-top" src={product.pictureURL} alt="imagenMate" />
                </Link>

                <div className="card-bodSy w-100 d-flex flex-column justify-content-center align-items-center text-center">
                    <h5 className="card-title texto22px"> {product.title}</h5>

                    {product.price !== "" && <p className="card-text my-1"> ${product.price} </p>}

                    <p className="card-text texto16px my-0 text-danger"> Stock: {product.stock} </p>

                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd}  />
                    <button onClick={() => addToFav(product) }> <FontAwesomeIcon icon={faHeart} size="1x" /> </button>
                </div>
            </div>
        </>
    );
};

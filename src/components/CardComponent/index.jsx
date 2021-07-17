import "./styles.scss";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

export const CardComponent = ({ product }) => {
    const { addToCart, addToFav } = useContext(ShopContext);
    // Esto lo trae como objeto
    // const state = useContext(ShopContext)

    const onAdd = (cantidad) => addToCart(product, cantidad);

    const [isFav, setIsFav] = useState(false);

    return (
        <>
            <div className="card col-sm-12 col-md-3 mx-1 my-2 texto22px p-0 text-center card-hover">
                {/* <Link to={`/${product.category}/${product.id}`}> */}
                <button
                    className="btn-fav-derecha"
                    onClick={() => {
                        addToFav(product);
                        if (isFav !== true) {
                            setIsFav(true);
                        } else {
                            setIsFav(false);
                        }
                    }}
                >
                    {!isFav ? (
                        <FontAwesomeIcon icon={faHeart} size="1x" />
                    ) : (
                        <FontAwesomeIcon icon={faSolidHeart} size="1x" />
                    )}
                </button>
                <Link to={`/item/${product.id}`}>
                    <div className="imagenCard">
                        <img className="card-img-top" src={product.pictureURL} alt="imagenMate" />
                    </div>
                </Link>
                <div className="d-flex flex-column justify-content-center flex-grow-1">
                    <p className="card-title  w-75 m-auto "> {product.title}</p>
                </div>

                {product.stock > 1 ? (
                    <div className="card-bodSy w-100 d-flex flex-column justify-content-end align-items-center text-center  ">
                        {product.price !== "" && (
                            <p className="card-text my-1"> ${product.price} </p>
                        )}

                        <p className="card-text texto16px my-1 text-danger ">
                            Stock: {product.stock}
                        </p>

                        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                    </div>
                ) : (
                    <div className="card-bodSy w-100 d-flex flex-column justify-content-start align-items-center text-center flex-grow-1 ">
                        <p className="card-text texto16px my-1 text-danger ">
                            Actualmente no disponible
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

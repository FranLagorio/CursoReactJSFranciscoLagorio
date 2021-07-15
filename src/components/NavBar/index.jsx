import "./styles.scss";
import LogoPostal from "../../images/logoPostal.png";
import LogoMate from "../../images/mate.svg";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
    const { cart, itemsTotal } = useContext(ShopContext);

    // useEffect(() => {}, [cart]);

    return (
        <div className="navBar d-flex flex-column justify-content-center flex-md-row justify-content-md-between  align-items-center">
            <div className="pLogo d-flex flex-row align-items-center">
                {/* Esto para que ande tiene que estar la carpeta images en public */}
                {/* <img src="images/logoPostal.png" className="logo" alt="seo" /> */}
                {/* OTRA FORMA COMO COMPONENTE */}
                <img src={LogoPostal} className="logo ms-0 ms-md-4 " alt="LogoPostaDeMates" />
                <Link to="/" className="text-decoration-none text-black-50">
                    POSTAL DE MATES
                </Link>
            </div>

            <div className="navBar__li">
                <ul>
                    <li>
                        <Link
                            to="/category/Imperiales"
                            className="text-decoration-none text-black-50"
                        >
                            <img src={LogoMate} className="logoMate" alt="logoMate" />
                            Imperiales
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/category/Torpedos"
                            className="text-decoration-none text-black-50"
                        >
                            <img src={LogoMate} className="logoMate" alt="logoMate" />
                            Torpedos
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/category/Camioneros"
                            className="text-decoration-none text-black-50"
                        >
                            <img src={LogoMate} className="logoMate" alt="logoMate" />
                            Camioneros
                        </Link>
                    </li>

                    {itemsTotal === 0 ? (
                        ""
                    ) : (
                        <li className="d-inline-flex">
                            <Link to={"/Checkout"} className="text-decoration-none text-black-50">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {itemsTotal === 0 ? "" : itemsTotal}
                            </Link>
                        </li>
                    )}

                    <li>
                        <Link to={"/favorites"} className="text-decoration-none text-black-50">
                            <FontAwesomeIcon icon={faHeart} size="1x" />
                        </Link>
                    </li>

                    <li>
                        <button
                            onClick={() => {
                                alert("Iniciar Sesion");
                            }}
                            class="btn btn-dark m-2"
                        >
                            Iniciar Sesion
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

import "./estilosNavBar.scss";
import LogoPostal from "../../images/logoPostal.png"
import LogoMate from "../../images/mate.svg"

import { CartWidget } from "../CartWidget";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


export const NavBar = () => {
    return (
        <div className="navBar" >
            
            <div className="pLogo">
                {/* Esto para que ande tiene que estar la carpeta images en public */}
                {/* <img src="images/logoPostal.png" className="logo" alt="seo" /> */}
                {/* OTRA FORMA COMO COMPONENTE */}
                <img src={LogoPostal} className="logo" alt="LogoPostaDeMates" />
                <p>POSTAL DE MATES </p>
            </div>
            
            <div className="navBar__li">
                <ul>
                    <li> <img src={LogoMate} className="logoMate" alt="logoMate" /> Catalogo </li>
                    <li> <FontAwesomeIcon icon={faInfoCircle} /> Informacion </li>
                    <li> <CartWidget/> Carrito </li>
                    <li>
                        <button onClick={ () => { alert("Iniciar Sesion")}} class="btn btn-dark"> Iniciar Sesion</button>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

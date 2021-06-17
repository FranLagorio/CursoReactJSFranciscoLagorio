import "./estilosNavBar.scss";

import LogoPostal from "../../images/logoPostal.png"
import LogoMate from "../../images/mate.svg"

import { CartWidget } from "../CartWidget";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


export const NavBar = ( {contador} ) => {
    
    return (
        
        <div className="navBar flex-column flex-md-row justify-content-between align-items-center" >
            <div className="pLogo  flex-row align-items-center">
                {/* Esto para que ande tiene que estar la carpeta images en public */}
                {/* <img src="images/logoPostal.png" className="logo" alt="seo" /> */}
                {/* OTRA FORMA COMO COMPONENTE */}
                <img src={LogoPostal} className="logo  ms-0 ms-md-4 " alt="LogoPostaDeMates" />
                <p>POSTAL DE MATES </p>
            </div>
            
            <div className="navBar__li">
                <ul>
                    <li> <img src={LogoMate} className="logoMate" alt="logoMate" /> Catalogo </li>
                    <li> <FontAwesomeIcon icon={faInfoCircle} /> Informacion </li>
                    <li>  <CartWidget/> {contador}   </li>
                    <li>
                        <button onClick={ () => { alert("Iniciar Sesion")}} class="btn btn-dark m-2"> Iniciar Sesion</button>
                    </li>
                </ul>
            </div>
        </div>
       
    );
};

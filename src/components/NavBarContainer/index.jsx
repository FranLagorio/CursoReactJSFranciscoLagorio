import "./styles.scss";
import LogoPostal from "../../images/logoPostal.png";
import LogoMate from "../../images/mate.svg";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";

export const NavBarContainer = ({ contador }) => {
  return (
    <div className="navBar d-flex flex-column justify-content-center flex-md-row justify-content-md-between  align-items-center">
      <div className="pLogo d-flex flex-row align-items-center">
        {/* Esto para que ande tiene que estar la carpeta images en public */}
        {/* <img src="images/logoPostal.png" className="logo" alt="seo" /> */}
        {/* OTRA FORMA COMO COMPONENTE */}
        <img
          src={LogoPostal}
          className="logo ms-0 ms-md-4 "
          alt="LogoPostaDeMates"
        />
        <Link to="/" className="text-decoration-none text-black-50" >POSTAL DE MATES</Link>
      </div>

      <div className="navBar__li">
        <ul>
          <li>
            <Link to="/category/Imperiales" className="text-decoration-none text-black-50">
              <img src={LogoMate} className="logoMate" alt="logoMate" />
              Imperiales
            </Link>
          </li>

          <li>
            <Link to="/category/Torpedos" className="text-decoration-none text-black-50">
              <img src={LogoMate} className="logoMate" alt="logoMate" />
              Torpedos
            </Link>
          </li>

          <li>
            <Link to="/category/Camioneros" className="text-decoration-none text-black-50">
              <img src={LogoMate} className="logoMate" alt="logoMate" />
              Camioneros
            </Link>
          </li>
          <li>
            <CartWidget /> {contador}
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

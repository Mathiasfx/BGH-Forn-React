import React, { useState } from "react";
import { MenuContainer } from "./styles/MenuStyles";
import iconAviso from "../../assets/images/icons/aviso.svg";
import iconUser from "../../assets/images/icons/usuario.svg";
import iconMundo from "../../assets/images/icons/mundo.svg";

import MainMenu from "./MainMenu";

const Menu = () => {
  const [navbar, setNabvar] = useState(false);

  //Funcion sube el menu de arriba
  const CambiarMenuScroll = () => {
    if (window.scrollY >= 60 && window.innerWidth > 770) {
      setNabvar(true);
    } else {
      setNabvar(false);
    }
  };
  window.addEventListener("scroll", CambiarMenuScroll);
  //Funcion sube el menu de arriba
  return (
    <MenuContainer>
      <div className={navbar ? "navbar-top scroll" : "navbar-top"}>
        <div className="container-lg">
          <ul className="navbar-navitem">
            <img className="iconos-top" src={iconAviso} alt="icono estado" />
            <li>
              <a href="http://google.com.ar">Estado de mi Servicio</a>
            </li>
            <img className="iconos-top" src={iconUser} alt="icono cuenta" />
            <li>
              <a href="http://google.com.ar">Mi Cuenta</a>
            </li>
            <img className="iconos-top" src={iconMundo} alt="icono region" />
            <li>
              <a href="http://google.com.ar">Uruguay</a>
            </li>
          </ul>
        </div>
      </div>

      <MainMenu tipo="navbar-main-blanco" />
    </MenuContainer>
  );
};
export default Menu;

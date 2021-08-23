import React, { useState, useEffect } from "react";
import ButtonSpecial from "../commons/ButtonSpecial";
import Barsicon from "../../assets/images/icons/bars.svg";

const MainMenu = ({ tipo }) => {
  const [tipomenu, setTipomenu] = useState("");
  const [navbar, setNavbar] = useState(false);

  //Carga de Tipo
  useEffect(() => {
    setTipomenu(tipo);
  }, [tipo]);
  //Funcion que muestra menu blanco al scrool
  const CambiarMenuScroll = () => {
    if (window.scrollY >= 40 && window.innerWidth > 814) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", CambiarMenuScroll);
  window.document.addEventListener("DOMContentLoaded", CambiarMenuScroll);
  return (
    <nav className={navbar ? "navbar-main-inverse" : tipomenu}>
      <div className="container-lg">
        <div className="open-menuresponsive">
          <img src={Barsicon} alt="Boton_Responsive" />
        </div>
        <a
          href="http://google.com.ar"
          className={navbar ? "logo-inverso" : "logo"}
        ></a>
        <ul className="navbar-navitem">
          <li className="navitem">
            <a href="http://www.google.com.ar" className="nav-links">
              Dashboard
            </a>
          </li>
          <li className="navitem">
            <a href="http://google.com.ar" className="nav-links">
              Ordenes Abiertas
            </a>
          </li>
          <li className="navitem">
            <a href="http://google.com.ar" className="nav-links">
              Ordenes Finalizadas
            </a>
          </li>

          <li className="primario">
            <ButtonSpecial navbar={navbar} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;

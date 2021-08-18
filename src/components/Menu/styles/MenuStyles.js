import styled from "styled-components";
import Logo from "../../../assets/images/logo.png";
export const MenuContainer = styled.div`
/*Estilos Menu Arriba*/
&& .navbar-top {
  width: 100%;
  height: 32px;
  background-color: #00918F;
  position: fixed;
}
/*Estilos Iconos Arriba Estado-region-Micuenta*/
&& .iconos-top {
  display: block;
  padding-right: 5px;
  margin-top: -2px;
}

/*Estilo Icono Boton*/
&& .icono-btn {
  margin-right: 11px;
}
/*Estilos Menu Arriba a*/
&& .navbar-top .navbar-navitem a {
  text-align: center;
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-decoration: none;
  color: #ffffff;
}

&& .navbar-top ul {
  list-style: none;
  /*Flexbox para acomodar*/
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  margin: 0;
}
&& .navbar-top li {
  padding-right: 2rem;
}
&& .navbar-top li a:hover {
  color: #e2e5f1;
}

&& .scroll {
  transition: 0.5s;
  transform: translateY(-32px);
}

&& .navbar-main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 33px;
  background-color: rgba(0, 0, 255, 0);
  color: #fff;
  height: 70px;
  width: 100%;
  z-index: 1;
  transition: 0.3s;
}
/*Estilos Elementos Menu a ul*/
&& .navbar-main a {
  text-align: center;
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-decoration: none;
  color: #ffffff;
}
&& .navbar-main ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  padding-top: 15px;
  list-style: none;
}
&& .navbar-main li {
  padding-right: 11px;
  padding-left: 11px;
  padding-bottom: 5px;
  padding-top: 5px;
}
&& .navbar-main a:hover {
  color: #ebebeb;
}
/*ESTILOS MENU INVERSO*/
/*Estilos Menu Principal - Inverso*/
&& .navbar-main-inverse {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 33px;
  background-color: #fff;
  color: #11216c;
  height: 70px;
  width: 100%;
  transform: translateY(-33px);
  z-index: 1;
  box-shadow: 0px 2px 3px rgba(146, 153, 186, 0.2);
  transition: 0.3s;
}

&& .navbar-main-inverse a {
  text-align: center;
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-decoration: none;
  color: #11216c !important;
}
&& .navbar-main-inverse ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  padding-top: 15px;
  list-style: none;
}
&& .navbar-main-inverse li {
  padding-right: 11px;
  padding-left: 11px;
  padding-bottom: 5px;
  padding-top: 5px;
}
/*ESTILOS MENU BLANCO*/
/*Estilos Menu Principal - bLACNO*/
&& .navbar-main-blanco {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 33px;
  background-color: #fff;
  color: #11216c;
  height: 70px;
  width: 100%;
  z-index: 1;
  transition: 0.3s;
  box-shadow: 0px 2px 3px rgba(146, 153, 186, 0.2);
}
&& .navbar-main-blanco a {
  text-align: center;
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-decoration: none;
  color: #11216c !important;
}
&& .navbar-main-blanco ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  padding-top: 15px;
  list-style: none;
}
&& .navbar-main-blanco li {
  padding-right: 11px;
  padding-left: 11px;
  padding-bottom: 5px;
  padding-top: 5px;
}
&& .navbar-main-blanco .logo {
  background-image:url(${Logo});
}
&& .navbar-main-blanco .btn-primario {
  color: #fff;
  background-color: #11216c;
}
/*ESTILOS MENU Blanco*/

/*Estilos div Logo*/
&& .logo {
  position: absolute;
  top: 0.5rem;
  /* left: 10.1rem; */
  display: block;
  padding: 16px 16px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
  transition: 0.5s;
}
/*Estilos div Logo - Inverso */
&& .logo-inverso {
  position: absolute;
  top: 1.3rem;
  /* left: 10.1rem; */
  display: block;
  padding: 16px 16px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
  transition: 0.5s;
}

/*Efecto Linea HOVER ------------------------------------------------------------------------*/
&& .navbar-navitem li {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}

&& .navbar-navitem li:hover {
  background-size: 100% 2px;
}
&& .navbar-navitem .primario:hover {
  background-size: 0% 2px;
}
/*Icono Menu responsive*/
@media only screen and (min-width: 814px) {
  /* Para Escritorio */
  .open-menuresponsive {
    display: none;
  }
}
/*logo que no se superponga*/
@media only screen and (max-width: 930px) {
  .logo {
    left: 1rem;
  }
  .logo-inverso {
    left: 1rem;
  }
}

@media only screen and (max-width: 814px) {
  /* Para Telefonos ////////////////////////////////////////////////////*/
  .navbar-main {
    background-color: #f3f4f8;
    top: 0;
    transition: 0.2s;
    box-shadow: 0px 2px 3px rgba(146, 153, 186, 0.2);
  }

  .navbar-main ul {
    display: none;
  }

  .navbar-main a {
    text-align: left;
  }

  .navbar-main-blanco {
    background-color: #f3f4f8;
    top: 0;
    transition: 0.2s;
    box-shadow: 0px 2px 3px rgba(146, 153, 186, 0.2);
  }

  .navbar-main-blanco ul {
    display: none;
  }

  .navbar-main-blanco a {
    text-align: left;
  }

  /*Ocultar Elementos Menu Principal y Secundario*/
  .navbar-navitem {
    display: none;
  }
  /*Cambiar logo a negro cuando aparece menu responsive*/
  .logo {
    background-image: url(${Logo});
    margin: 5px 0 0 0;
    left: 60px;
    top: 1rem;
    transition: 0.3s;
  }
  .open-menuresponsive {
    cursor: pointer;
  }
}

&& .bloquear {
  overflow-y: hidden;
  overflow-x: hidden;
}




`;
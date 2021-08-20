import styled from "styled-components";

import {
  Medium_Gray,
  Medium_Blue_Gray,
  Medium_Green,
  Light_Gray_BG,
  colorprincipal,
  White,
} from "../../colors";

//Versiones Mobile y Desktop
export const desktopStartWidth = 814;
export const tabletStartWidth = 1024;
export const mobile = `@media (max-width: ${desktopStartWidth}px)`;
export const tablet = `@media (max-width: ${tabletStartWidth}px)`;

//LINEA DE TIEMPO
export const Timeline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${mobile} {
    margin-right: 0;
  }
  //contenedorPadre
  && .timeline__container {
    min-height: 80px;
    display: flex;
    flex-direction: row;
    ${mobile} {
      width: 100%;
    }
  }
  //Circulo
  && .timeline__circle {
    width: 1rem;
    height: 1rem;
    margin-top: 1.4rem;
    border-radius: 50%;
    border: solid 0.125rem ${Medium_Gray};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Light_Gray_BG};
  }
  //CirculoActivo
  && .timeline__circle--active {
    border: solid 0.125rem ${Medium_Green};
    background-color: ${Medium_Green};
  }
  //linea-horizontal
  && .timeline__line {
    border-bottom: solid 2px ${Medium_Gray};
    //  width: 6.85rem;
    width: 20%;
    height: 32px;
    //en mobile

    //texto
    & p {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.3rem;
      letter-spacing: 0em;
      margin-left: 0.3rem;
      color: ${Medium_Green};
    }
  }
  //linea-horizontal-Atciva verde
  && .timeline__line--active {
    border-bottom: solid 2px ${Medium_Green};
  }
`;

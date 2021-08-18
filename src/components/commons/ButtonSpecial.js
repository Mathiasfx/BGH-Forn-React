import React from "react";
import "./Button.css";

const ButtonSpecial = ({ navbar }) => {
  return (
    <span
      className={navbar ? "btn-primario blanco" : "btn-primario"}
      id="cotizar"
    >
      <img
        className="icono-btn"
        src="/src/images/icons/lupa.svg"
        alt="icono estado"
      />
      COTIZÁ
    </span>
  );
};

export default ButtonSpecial;

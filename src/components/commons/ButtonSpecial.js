import React from "react";
import "./Button.css";
import iconSalve from "../../assets/images/icons/salve.png";

const ButtonSpecial = ({ navbar }) => {
  return (
    <span
      className={navbar ? "btn-primario blanco" : "btn-primario"}
      id="cotizar"
    >
      <img className="icono-btn" src={iconSalve} alt="icono estado" />
      Solicitar Asistencia
    </span>
  );
};

export default ButtonSpecial;

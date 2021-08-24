import React, { useState, useEffect } from "react";
import { Timeline } from "./styles/LineStateStyles";

const LineState = ({ completo }) => {
  const [Paso, setPaso] = useState(0);

  useEffect(() => {
    switch (completo) {
      case 2:
        setPaso(2);
        break;
      case 3:
        setPaso(3);
        break;
      case 4:
        setPaso(4);
        break;

      default:
        setPaso(1);
        break;
    }
  }, [completo]);

  console.log(completo);
  return (
    <Timeline>
      <div className="col-md-8 col-sm-12 timeline__container">
        <div
          className={
            Paso > 1
              ? "timeline__circle timeline__circle--active"
              : "timeline__circle"
          }
        ></div>
        <div
          className={
            Paso > 1
              ? "timeline__line timeline__line--active"
              : "timeline__line"
          }
        >
          <p>Sucursal</p>
        </div>
        <div
          className={
            Paso > 2
              ? "timeline__circle timeline__circle--active"
              : "timeline__circle"
          }
        ></div>
        <div
          className={
            Paso > 2
              ? "timeline__line timeline__line--active"
              : "timeline__line"
          }
        >
          <p>Falla</p>
        </div>
        <div
          className={
            Paso > 3
              ? " timeline__circle timeline__circle--active"
              : "timeline__circle"
          }
        ></div>
        <div
          className={
            Paso > 3
              ? "timeline__line timeline__line--active"
              : "timeline__line"
          }
        >
          <p>Servicio</p>
        </div>
        <div
          className={
            Paso > 3
              ? "timeline__circle timeline__circle--active"
              : "timeline__circle"
          }
        ></div>
      </div>
    </Timeline>
  );
};

export default LineState;

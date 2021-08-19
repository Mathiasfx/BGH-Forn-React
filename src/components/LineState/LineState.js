import React from "react";
import { Timeline } from "./styles/LineStateStyles";

const LineState = () => {
  return (
    <Timeline>
      <div className="col-md-8 col-sm-12 timeline__container">
        <div className="timeline__circle timeline__circle--active"></div>
        <div className="timeline__line timeline__line--active">
          <p>Sucursal</p>
        </div>
        <div className="timeline__circle"></div>
        <div className="timeline__line">
          <p>Falla</p>
        </div>
        <div className="timeline__circle"></div>
        <div className="timeline__line">
          <p>Servicio</p>
        </div>
        <div className="timeline__circle"></div>
      </div>
    </Timeline>
  );
};

export default LineState;

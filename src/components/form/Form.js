import React from "react";
import { FormContainer } from "./styles/FormStyles";

const Form = () => {
  return (
    <FormContainer>
      <form id="siteform">
        <select
          name="sitios"
          id="select_sitios"
          form="siteform"
          className="FormContainer_select form-select"
        >
          <option selected>Seleccionar ...</option>

          <option className="FormContainer_option" value="C03-CAIF-VISTA-LINDA">
            (C03) CAIF - VISTA LINDA
          </option>
          <option className="FormContainer_option" value="C04-CAIF-CLORINDA">
            (C04) CAIF - CLORINDA
          </option>
          <option className="FormContainer_option" value="C05-CAIF-SANTAFE">
            (C05) CAIF - SANTA FE
          </option>
          <option className="FormContainer_option" value="C06-CAIF-BELGRANO">
            (C06) CAIF - BELGRANO
          </option>
        </select>
        <h3 className=" FormContainer_label">Tipo de Asistencia</h3>
        <select
          name="asistencia"
          id="select_asistencia"
          form="siteform"
          className="FormContainer_select form-select"
        >
          <option selected>Seleccionar ...</option>
          <option className="FormContainer_option" value="Pedido de Reparacion">
            Pedido de Reparación
          </option>
          <option className="FormContainer_option" value="Pedido de Remplazo">
            Pedido de Remplazo
          </option>
        </select>
        <textarea
          placeholder="Agregue ínformación o detalles de la incidencia reportada."
          className="FormContainer_textarea"
        ></textarea>
        <h3 className="FormContainer_label">
          ¿Cuál es el nivel de criticidad del incidente?
        </h3>
        <div className="FormContainer_checkContainer">
          <input
            type="radio"
            class="btn-check FormContainer_checkCard"
            id="btn-check-outlined1"
            name="options"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btn-check-outlined1">
            Single toggle
          </label>
          <input
            type="radio"
            class="btn-check FormContainer_checkCard"
            id="btn-check-outlined2"
            name="options"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btn-check-outlined2">
            Single toggle
          </label>
          <input
            type="radio"
            class="btn-check FormContainer_checkCard"
            id="btn-check-outlined3"
            name="options"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btn-check-outlined3">
            Single toggle
          </label>
          <input
            type="radio"
            class="btn-check FormContainer_checkCard"
            id="btn-check-outlined4"
            name="options"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btn-check-outlined4">
            Single toggle
          </label>
        </div>
        <button className="FormContainer_submit" type="submit">
          Solicitar asistencia
        </button>
      </form>
    </FormContainer>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import { FormContainer } from "./styles/FormStyles";
import { Modal, ModalBody } from "reactstrap";
import "./styles/Modal.css";
import CheckIcon from "../../assets/images/icons/checkicon.svg";

const Form = ({ setDatos, datos, setCompleto }) => {
  const [Modalok, setModalok] = useState(false);
  const toggle = () => {
    setModalok(!Modalok);
  };

  useEffect(() => {
    PasosCalcular();
  }, [datos]);

  const PasosCalcular = () => {
    if (
      datos.sitio !== "" &&
      datos.asistencia === "" &&
      datos.detalle === "" &&
      datos.nivel === ""
    ) {
      setCompleto(2);
    } else if (
      (datos.sitio !== "" || datos.sitio === "Default Value") &&
      (datos.asistencia !== "" || datos.asistencia === "Default Value") &&
      datos.detalle === "" &&
      datos.nivel === ""
    ) {
      setCompleto(3);
    } else if (
      (datos.sitio !== "" || datos.sitio === "Default Value") &&
      (datos.asistencia !== "" || datos.asistencia === "Default Value") &&
      datos.detalle !== "" &&
      datos.nivel !== ""
    ) {
      setCompleto(4);
    }
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    PasosCalcular();
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const EnviarDatos = (event) => {
    event.preventDefault();
    toggle();
    setDatos({
      ...datos,
      id: Math.floor(Math.random() * (800 - 400)) + 400,
    });
    console.log(
      "enviando datos..." +
        datos.sitio +
        " " +
        datos.asistencia +
        " " +
        datos.detalle +
        " " +
        datos.nivel
    );
  };
  return (
    <FormContainer>
      <Modal
        isOpen={Modalok}
        toggle={toggle}
        size="lg"
        contentClassName="modal-content_rechazo"
        modalClassName="modal_rechazo"
        datos={datos}
      >
        <ModalBody>
          <div className="mb-5 iconn">
            <img src={CheckIcon} className="img-fluid" alt="icon" />
            <h4 style={{ color: "#fff" }} className="mt-3">
              ID Registrado: C001459{datos.id}
              <br></br> Nivel: {datos.nivel}
            </h4>

            <p className="mt-2">
              Nuestro equipo de seguimiento está revisando la solicitud de
              asistencia y tomará contacto con el referente tan pronto como sea
              posible.
            </p>
          </div>
          <div className="iconn">
            <button width="200px" className="mt-5 Modal_btn" onClick={toggle}>
              Volver al Panel
            </button>
          </div>
        </ModalBody>
      </Modal>
      <form id="siteform" onSubmit={EnviarDatos}>
        <select
          name="sitio"
          id="select_sitios"
          form="siteform"
          className="FormContainer_select form-select"
          onChange={handleInputChange}
        >
          <option selected value="Default Value">
            Seleccionar ...
          </option>

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
          onChange={handleInputChange}
        >
          <option selected value="Default Value">
            Seleccionar ...
          </option>
          <option className="FormContainer_option" value="Pedido de Reparacion">
            Pedido de Reparación
          </option>
          <option className="FormContainer_option" value="Pedido de Remplazo">
            Pedido de Remplazo
          </option>
        </select>
        <textarea
          name="detalle"
          placeholder="Agregue ínformación o detalles de la incidencia reportada."
          className="FormContainer_textarea"
          onChange={handleInputChange}
        ></textarea>
        <h3 className="FormContainer_label">
          ¿Cuál es el nivel de criticidad del incidente?
        </h3>
        <div className="FormContainer_checkContainer">
          <input
            type="radio"
            class="btn-check"
            id="btn-check-outlined1"
            name="nivel"
            autocomplete="off"
            onChange={handleInputChange}
            value="Critico"
          />
          <label
            className="btn FormContainer_checkCard"
            for="btn-check-outlined1"
          >
            <div className="FormContainer_checkCard_title col-9">
              <div className="FormContainer_checkCard_title_alert">
                Se enviará alerta prioritaria
              </div>
              <h4>Crítico</h4>
              <p>* Máxima prioridad. Se atiende ASAP</p>
            </div>
            <div className="FormContainer_checkCard_radiobtn col-3">
              <div className="FormContainer_checkCard_radiobtn_check"></div>
            </div>
          </label>
          <input
            type="radio"
            className="btn-check FormContainer_checkCard"
            id="btn-check-outlined2"
            name="nivel"
            autocomplete="off"
            onChange={handleInputChange}
            value="Prioritario"
          />
          <label
            className="btn FormContainer_checkCard"
            for="btn-check-outlined2"
          >
            <div className="FormContainer_checkCard_title col-9">
              <h4>Prioritario</h4>
              <p>* Se atiende dentro del próximo día habil</p>
            </div>
            <div className="FormContainer_checkCard_radiobtn col-3">
              <div className="FormContainer_checkCard_radiobtn_check"></div>
            </div>
          </label>
          <input
            type="radio"
            className="btn-check FormContainer_checkCard"
            id="btn-check-outlined3"
            name="nivel"
            autocomplete="off"
            onChange={handleInputChange}
            value="Regular"
          />
          <label
            className="btn FormContainer_checkCard"
            for="btn-check-outlined3"
          >
            <div className="FormContainer_checkCard_title col-9">
              <h4>Regular</h4>
              <p>*Se atiende dentro de las próximas 96hs</p>
            </div>
            <div className="FormContainer_checkCard_radiobtn col-3">
              <div className="FormContainer_checkCard_radiobtn_check"></div>
            </div>
          </label>
          <input
            type="radio"
            className="btn-check "
            id="btn-check-outlined4"
            name="nivel"
            autocomplete="off"
            onChange={handleInputChange}
            value="Baja"
          />
          <label
            className="btn FormContainer_checkCard"
            for="btn-check-outlined4"
          >
            <div className="FormContainer_checkCard_title col-9">
              <h4>Baja</h4>
              <p>*Se atiende en próxima visita preventiva.</p>
            </div>
            <div className="FormContainer_checkCard_radiobtn col-3">
              <div className="FormContainer_checkCard_radiobtn_check"></div>
            </div>
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

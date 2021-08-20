import React from "react";
import Form from "../../components/form/Form";
import LineState from "../../components/LineState/LineState";
import { FormViewCointainer } from "./styles/FormularioViewStyles";

const FormularioView = () => {
  return (
    <div className="container">
      <FormViewCointainer>
        <LineState />
        <h3 className="mb-4">¿En qué sitio requiere asistencia?</h3>
        <Form />
      </FormViewCointainer>
    </div>
  );
};

export default FormularioView;

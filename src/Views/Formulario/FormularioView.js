import React, { useState } from "react";
import Form from "../../components/form/Form";
import LineState from "../../components/LineState/LineState";
import { FormViewCointainer } from "./styles/FormularioViewStyles";

const FormularioView = () => {
  const [datos, setDatos] = useState({
    id: "",
    sitio: "",
    asistencia: "",
    detalle: "",
    nivel: "",
  });
  const [completo, setCompleto] = useState(1);
  return (
    <div className="container">
      <FormViewCointainer>
        <LineState completo={completo} />
        <h3 className="mb-4">¿En qué sitio requiere asistencia?</h3>
        <Form setDatos={setDatos} datos={datos} setCompleto={setCompleto} />
      </FormViewCointainer>
    </div>
  );
};

export default FormularioView;

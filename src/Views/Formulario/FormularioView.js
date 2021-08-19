import React from "react";
import LineState from "../../components/LineState/LineState";
import { FormViewCointainer } from "./styles/FormularioViewStyles";

const FormularioView = () => {
  return (
    <div className="container">
      <FormViewCointainer>
        <LineState />
      </FormViewCointainer>
    </div>
  );
};

export default FormularioView;

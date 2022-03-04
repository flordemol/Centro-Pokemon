import React, { useState, useContext, useRef, useEffect } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", tipo="entrenador", foco=false }) => {
  // Función del Contexto para modificar los valores del formulario
  const { handleFormulario } = useContext(ContextoFormulario);

  // Estado local para manejar el estado del input
  const [valueInput, setValueInput] = useState("");

  const refInput = useRef(null);

  const onChange = (e) => {
    // Actualizar el estado local del input
    setValueInput(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Actualizar el estado global con los datos de cada input
      handleFormulario({
      type :  (tipo === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON"),
      payload : {
        field : name,
        value : e.target.value
      }
    })
  };

  useEffect(() => {
    foco && refInput.current.focus();
  },[foco]);

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={valueInput}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ refInput }
      />
    </div>
  );
};

export default Input;

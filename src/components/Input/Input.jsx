import React, { useState, useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Acceder al estado global para obtener los datos del formulario y una manera de actualizar los mismos
  const { formulario, cargaFormulario } = useContext(ContextoFormulario);

  // Estado local para manejar el estado del input
  const [valueInput, setValueInput] = useState("");

  const onChange = (e) => {
    // Actualizar el estado local del input
    setValueInput(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Actualizar el estado global con los datos de cada input
    // (utilizar el nombre de cada input para guardar los datos en el estado global usando una notación de { clave: valor })
    
    cargaFormulario({
      ...formulario,
      [name] : e.target.value
    })
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={valueInput}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

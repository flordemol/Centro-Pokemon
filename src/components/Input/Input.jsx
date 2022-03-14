import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { ContextoFormulario } from "../../context/ContextoFormulario";

/**
 * Componente que maneja los inputs del formulario.
 *
 * @author Florencia De Mollein <florenciademollein@gmail.com>
 * @param {{
 *    name: string,
 *    label: string,
 *    type: string,
 *    seccionForm: string,
 *    foco: boolean,
 * }} props
 * @returns {JSX.Element}
 */

const Input = ({ name, label, type, seccionForm, foco=false }) => {
  // Función del Contexto para modificar los valores del formulario
  const { handleFormulario } = useContext(ContextoFormulario);

  // Estado local para manejar el estado del input
  const [valueInput, setValueInput] = useState("");

  const refInput = useRef(null);

  /**
  * La función onChange responde al evento onChange del input y guarda el value en el estado local del componente
  * 
  * @author Florencia De Mollein <florenciademollein@gmail.com>
  * @param {Event} e InputEvent del input
  */
  const onChange = (e) => {
    // Actualizar el estado local del input
    setValueInput(e.target.value)
  };

  /**
  * La función onBlur responde al evento onBlur del input y actualiza el estado global ("ContextoFormulario") con los valores de cada input.
  * La información que se envía al contexto es: la acción a realizar (que depende de 'seccionForm') y el payload que contiene nombre del campo a actualizar y su valor
  * 
  * @author Florencia De Mollein <florenciademollein@gmail.com>
  * @param {Event} e InputEvent del input
  */
  const onBlur = (e) => {
    e.preventDefault();

    // Actualizar el estado global con los datos de cada input
      handleFormulario({
      type :  (seccionForm === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON"),
      payload : {
        field : name,
        value : e.target.value
      }
    })
  };

  // Si al componente se le pasa "foco=true", se hace foco al input
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

Input.propTypes = {
  name : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  seccionForm : PropTypes.string.isRequired,
  foco : PropTypes.bool,
};

export default Input;

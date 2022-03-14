import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { capitalizarPrimeraLetra } from "../../utils/capitalizarPrimeraLetra";

/**
 * Componente que maneja los select del formulario.
 *
 * @author Florencia De Mollein <florenciademollein@gmail.com>
 * @param {{
 *    name: string,
 *    label: string,
 *    seccionForm: string,
 *    options: array,
 *    valueDefault: string,
 * }} props
 * @returns {JSX.Element}
 */

const Select = ({name, label, seccionForm, options = [], valueDefault = ""}) => {

    const { handleFormulario } = useContext(ContextoFormulario);
    const [, setValueSelect] = useState("");

  /**
  * La función onChange responde al evento onChange del select y guarda el value en el estado local del componente y en el contexto
  * La información que se envía al contexto es: la acción a realizar (que depende de 'seccionForm') y el payload que contiene nombre del campo a actualizar y su valor
  * 
  * @author Florencia De Mollein <florenciademollein@gmail.com>
  * @param {Event} e InputEvent del select
  */
  const onChange = (e) => {
    // Actualizar el estado local del select
    setValueSelect(e.target.value);

    // Actualizar el estado global con los datos de cada select
    handleFormulario({
        type :  (seccionForm === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON"),
        payload : {
        field : name,
        value : e.target.value
        }
    })
  };

  return (
    <div className="select-contenedor">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} onChange={onChange} defaultValue="" >
            <option value="" disabled>{valueDefault}</option>
            {
              options?.map((option, index) =>  <option key={index} value={option.name}>{capitalizarPrimeraLetra(option.name)}</option>)
            }
        </select>
    </div>
  );
};

Select.propTypes = {
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    seccionForm : PropTypes.string.isRequired,
    options : PropTypes.array,
    valueDefault : PropTypes.string,
};

export default Select;

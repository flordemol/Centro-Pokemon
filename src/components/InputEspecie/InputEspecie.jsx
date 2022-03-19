import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import PropTypes from 'prop-types';
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { getEspeciesPokemon } from "../servicios/getData";

/**
 * Componente que maneja el input de selección de especies.
 *
 * @author Florencia De Mollein <florenciademollein@gmail.com>
 * @param {{
 *    name: string,
 *    label: string,
 *    seccionForm: string
 * }} props
 * @returns {JSX.Element}
 */

const InputEspecie = ({ name, label, seccionForm }) => {
  
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { handleFormulario } = useContext(ContextoFormulario);
  let [ pageOffset, setPageOffset ] = useState(0);

  // Usando useQuery obtenemos las especies de Pokemon (paginadas) y las variables isLoading e isError
  const { data, isLoading, isError } = useQuery([ "EspeciesPokemon", pageOffset ], () => getEspeciesPokemon(pageOffset));

  const elegirEspecie = (e, nombreEspecie) => {
    e.preventDefault();

    handleFormulario({
        type :  (seccionForm === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON"),
        payload : {
        field : name,
        value : nombreEspecie
        }
    })
    setMostrarPopup(false);
  };

  const renderizarEspecies = () => (
    <>
      {data?.results?.map((especie) => (
        <button
          key={especie.name}
          className="botones-especie"
          onClick={(e) => elegirEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-contenedor">
      {mostrarPopup && (
        <div className="popup-especie">
          <h4>Seleccionar especie</h4>
          <div className="contenedor-especies">{renderizarEspecies()}
            { isLoading && <p>Cargando especies...</p>}
            { isError && <p>Error al cargar especies...</p>}
          </div>
          <div className="paginador">
            <button className="boton-anterior" disabled={!data?.previous} onClick={() => setPageOffset(pageOffset - 20)}>Anterior</button>
            <button className="boton-siguiente" disabled={!data?.next} onClick={() => setPageOffset(pageOffset + 20)}>Siguiente</button>
          </div>
        </div>
      )}
      <p htmlFor={name}>{label}</p>
      <button
        className="boton-seleccionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Seleccionar
      </button>
    </div>
  );
};

InputEspecie.propTypes = {
  name : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  seccionForm : PropTypes.string.isRequired
};

export default InputEspecie;

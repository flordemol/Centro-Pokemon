import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { capitalizarPrimeraLetra } from "../../utils/capitalizarPrimeraLetra";
import { URL_POST_FORM } from "../../constants";

// Función para enviar formulario al servidor cuando se invoca el metodo mutate
const enviarFormulario = async (data) => {
  const response = await fetch(URL_POST_FORM, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log({'data' : data, 'response' : response})
    return response.json();
  } else {
    throw new Error("Error al enviar el formulario");
  }
};

/**
 * Componente que muestra el detalle de lo completado en el formulario
 * 
 * @author Florencia De Mollein <florenciademollein@gmail.com>
 * @returns {JSX.Element}
 */

const Detalle = () => {
  // Obtener datos del formulario para mostrarlo en la vista previa
  const { formulario } = useContext(ContextoFormulario)
  const { 
    nombre,
    apellido,
    email
  } = formulario?.entrenador;

  const {
    nombrePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    edadPokemon,
    especiePokemon
  } = formulario?.pokemon;
  
  // Uso del Hook useMutation para enviar la información del formulario al servidor
  const { data, isLoading, isError, mutate, isSuccess } = useMutation(enviarFormulario);

   // Uso de useEffect para que se ejecute una vez realiza la mutación y mostrar el mensaje de éxito o error
   useEffect(() => {
    if (isSuccess) {
      alert(`Formulario enviado correctamente, id ${data ? data?.id : ""}`);
    } else if (isError) {
      alert("Error al enviar el formulario. Por favor intente nuevamente");
    }
  }, [isSuccess, data, isError]);

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: { nombre }</p>
          <p>Apellido: { apellido }</p>
          <p>Email: { email }</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: { nombrePokemon }</p>
          <p>Tipo: { capitalizarPrimeraLetra(tipoPokemon) }</p>
          <p>Elemento: { elementoPokemon }</p>
          <p>Altura: { alturaPokemon }</p>
          <p>Edad: { edadPokemon }</p>
          <p>Especie: { especiePokemon }</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => mutate(formulario)}
      >
        Enviar Solicitud
      </button>
      { isLoading && <div className="loading-txt">Enviando formulario...</div> }
      { isSuccess && <div className="success-txt">Formulario enviado</div> }
      { isError && <div className="error-txt">☹ Error al enviar el formulario, por favor verifique la información ingresada</div> }
    </div>
  );
};

Detalle.propTypes = {};

export default Detalle;

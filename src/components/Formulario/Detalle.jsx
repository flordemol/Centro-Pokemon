import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { capitalizarPrimeraLetra } from "../../utils/capitalizarPrimeraLetra";

// Función que se encarga de enviar el formulario al servidor.
const enviarFormulario = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Solicitud enviada :)");
    console.log(response)
    return await response.json();
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
    edadPokemon
  } = formulario?.pokemon;

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
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => enviarFormulario(formulario)}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

Detalle.propTypes = {};

export default Detalle;

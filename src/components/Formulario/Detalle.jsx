import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

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
          <p>Tipo: { tipoPokemon }</p>
          <p>Elemento: { elementoPokemon }</p>
          <p>Altura: { alturaPokemon }</p>
          <p>Edad: { edadPokemon }</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;

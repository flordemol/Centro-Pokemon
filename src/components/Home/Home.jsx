import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";

/**
* Componente que muestra la Home con un botón para ingresar al formulario "Ingresar Pokemon"
* 
* @author Florencia De Mollein <florenciademollein@gmail.com>
* @return {JSX.Element}
*/

const Home = () => {
  return (
    <header className="App-header">
      <img className="App-logo" alt="logo" src={pokebola} />
      <h1>Centro Pokemon de Ash</h1>
      <Link to="/formularioIngreso" className="boton-ingreso">
        Ingresar pokemon
      </Link>
    </header>
  );
};

Home.propTypes = {};

export default Home;

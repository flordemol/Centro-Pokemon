import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Detalle from "./Detalle";
import { FormularioProvider } from "../../context/ContextoFormulario";
import { getTiposPokemon } from "../servicios/tiposPokemones";

/**
* Componente que muestra los inputs del formulario
*
* @author Florencia De Mollein <florenciademollein@gmail.com>
* @return {JSX.Element}
*/

const Formulario = () => {

  const { data, isLoading, isError } = useQuery("TiposPokemon", getTiposPokemon);

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          {/*
           Provider para acceder al estado global del formulario
          */}
          <FormularioProvider>
            <div className="inputs">
              <div>
                <p className="nombre-seccion">
                  <img src={entrenador} alt="entrenador" />
                  <span>ENTRENADOR</span>
                </p>
                <Input name="nombre" label="Nombre" type="text" seccionForm="entrenador" foco={true} />
                <Input name="apellido" label="Apellido" type="text" seccionForm="entrenador" />
                <Input name="email" label="Email" type="email" seccionForm="entrenador" />
              </div>
              <div>
                <p className="nombre-seccion">
                  <img src={pikachu} alt="pikachu" />
                  <span>POKEMON</span>
                </p>
                <Input name="nombrePokemon" label="Nombre" type="text" seccionForm="pokemon" />
                <Select 
                  name="tipoPokemon"
                  label="Tipo"
                  seccionForm="pokemon"
                  options={data}
                  valueDefault="Seleciona el tipo de pokemon"
                  disabled={isLoading || isError}/>
                <Input name="elementoPokemon" label="Elemento" type="text" seccionForm="pokemon" />
                <Input name="alturaPokemon" label="Altura" type="text" seccionForm="pokemon" />
                <Input name="edadPokemon" label="Edad" type="text" seccionForm="pokemon" />
              </div>
            </div>
            <Detalle />
          </FormularioProvider>
        </div>
      </div>
    </>
  );
};

Formulario.propTypes = {};

export default Formulario;

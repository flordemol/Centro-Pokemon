import { createContext, useState, useReducer } from 'react';

// Estado inicial
const inicialState = {
    entrenador : {
        nombre : "",
        apellido : "",
        email : ""
    },
    pokemon : {
        nombrePokemon : "",
        tipoPokemon : "",
        elementoPokemon : "",
        alturaPokemon : "",
        edadPokemon : ""
    }
}

// Función reductora
const reducer = ( state, action ) => {
   
}

// Creación del Contexto
export const ContextoFormulario = createContext();

// Creación del povider (alojará a los componentes que tendrán acceso a este contexto)
export const FormularioProvider = ({ children }) => {
    // Estado del formulario
    const [ formulario, dispatch ] = useReducer( reducer, inicialState ); 

    // Acción a ejecutar
    const handleFormulario = ( type, data ) => {
        // dispatch
      };

    // Retornar provider junto con sus children
    return (
        <ContextoFormulario.Provider 
            value={{
                formulario,
                handleFormulario
            }}>
                { children }
        </ContextoFormulario.Provider>
    )
}

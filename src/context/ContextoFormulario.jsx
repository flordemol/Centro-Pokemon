import { createContext, useReducer } from 'react';

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
    switch ( action.type ) {
        case "ACTUALIZAR_ENTRENADOR":
          return {
              ...state,
              entrenador: {
                  ...state.entrenador,
                  [action.payload.field] : action.payload.value 
              }
            }
            case "ACTUALIZAR_POKEMON":
          return {
            ...state,
            pokemon: {
                ...state.pokemon,
                [action.payload.field] : action.payload.value 
            }
            }
        default:
            throw new Error("No se ha recibido una acción");
      }
}

// Creación del Contexto
export const ContextoFormulario = createContext();

// Creación del povider (alojará a los componentes que tendrán acceso a este contexto)
export const FormularioProvider = ({ children }) => {
    // Estado del formulario
    const [ formulario, dispatch ] = useReducer( reducer, inicialState ); 

    // Acción a ejecutar
    const handleFormulario = ({ type, payload }) => {
        dispatch({
            type,
            payload
        })
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

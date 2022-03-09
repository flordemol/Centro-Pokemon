import { createContext, useReducer } from 'react';
import { inicialState, reducer } from '../reducer/reducerFormulario';

// Creación del Contexto
export const ContextoFormulario = createContext();

/**
 * Creación del povider (alojará a los componentes que tendrán acceso a este contexto)
 *
 * @author Florencia De Mollein <florenciademollein@gmail.com>
 * @param {{
 *  children: React.ReactNode,
 * }} props
 * @returns {JSX.Element}
 */
export const FormularioProvider = ({ children }) => {
    // Estado del formulario
    const [ formulario, dispatch ] = useReducer( reducer, inicialState ); 

   /**
   * Funcion para actualizar el Form desde inputs
   * @author Florencia De Mollein <florenciademollein@gmail.com>
   * @param {string} type indica la acción a realizar ("ACTUALIZAR_ENTRENADOR" o "ACTUALIZAR_POKEMON")
   * @param {{
   *    [string]: string,
   * }} payload es un objeto que contiene 'field' y 'value'
   * 
   * Dispatch envía al reducer 'type' y 'payload'
   */
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

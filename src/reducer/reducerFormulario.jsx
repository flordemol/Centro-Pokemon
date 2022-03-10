/**
 * Estado inicial del formulario.
 * @type {{
 *    entrenador:{
 *      nombre: string,
 *      apellido: string,
 *      email: string
 *    },
 *    pokemon: {
 *      nombrePokemon: string,
 *      tipoPokemon: string,
 *      elementoPokemon: string,
 *      alturaPokemon: string,
 *      edadPokemon: string
 *   }
 * }} 
 */
export const inicialState = {
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

/**
* Reducer es el reductor del contexto, va a recibir el estado y acciones.
* @author Florencia De Mollein <florenciademollein@gmail.com>
* @param {initialState} state es el estado actual de nuestro contexto.
* @param {{
*     type: string,
*     payload : {
*       [string]: string,    
*     }
* }} action es la acción que recibimos de un dispatcher. Desestructuramos action en type y payload.
*   @returns {initialState}
*
* El resultado de la función reductora es el estado del contexto actualizado, de acuerdo a la información (field y value) y acción solicitada.
*/

// Función reductora
export const reducer = ( state, { type, payload } ) => {
    switch ( type ) {
        case "ACTUALIZAR_ENTRENADOR":
          return {
              ...state,
              entrenador: {
                  ...state.entrenador,
                  [payload.field] : payload.value 
              }
            }
            case "ACTUALIZAR_POKEMON":
          return {
            ...state,
            pokemon: {
                ...state.pokemon,
                [payload.field] : payload.value 
            }
            }
        default:
            throw new Error("No se ha recibido una acción");
      }
}

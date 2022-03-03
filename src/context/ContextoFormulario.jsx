import { createContext, useState } from 'react';

// Creación del Contexto y valor inicial
export const ContextoFormulario = createContext({
    formulario : {
        nombre : "",
        apellido : "",
        email : "",
        nombrePokemon : ""
    },
    cargaFormulario : () => {}
});

// Creación del povider (alojará a los componentes que tendrán acceso a este contexto)
export const FormularioProvider = ({children}) => {
    // Estado del formulario
    const [formulario, setFormulario] = useState(""); 

    // Función para actualizar valores del formulario
    const cargaFormulario = (data) => {
        setFormulario(data);
      };

    // Retornar provider junto con sus children
    return (
        <ContextoFormulario.Provider 
            value={{
                formulario,
                cargaFormulario
            }}>
                {children}
        </ContextoFormulario.Provider>
    )
}

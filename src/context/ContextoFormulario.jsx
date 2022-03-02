// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useState } from 'react';

// Creación del Contexto y valor inicial
export const ContextoFormulario = createContext({
    formulario : {
        nombre : "",
        apellido : "",
        email : "",
        nombrePokemon : ""
    },
    newFormulario : () => {}
});

const { Provider } = ContextoFormulario;

export const FormularioProvider = ({children}) => {
    const [formulario, setFormulario] = useState(""); 

    const newFormulario = (data) => {
        setFormulario(data);
      };

    return <Provider value={{formulario, newFormulario}}>{children}</Provider>
}


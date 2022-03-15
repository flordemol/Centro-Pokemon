// Función para obtener tipos de pokemones de la API
export const getTiposPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const { results } = await response.json();
    return results;
};

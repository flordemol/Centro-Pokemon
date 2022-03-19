// Función para obtener tipos de pokemones de la API
export const getTiposPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const { results } = await response.json();
    return results;
};

// Función para obtener especies de pokemones de la API paginada
export const getEspeciesPokemon = async (pageOffset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${pageOffset}&limit=20`);
    const info = await response.json();
    return info;
};

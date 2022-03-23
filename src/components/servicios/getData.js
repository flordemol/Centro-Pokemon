import { BASE_URL_POKEAPI, ENDPOINT_TIPOS, ENDPOINT_ESPECIES, LIMIT_PAGE } from "../../constants";

// Función para obtener tipos de pokemones de la API
export const getTiposPokemon = async () => {
    const response = await fetch(`${BASE_URL_POKEAPI}${ENDPOINT_TIPOS}`);
    const { results } = await response.json();
    return results;
};

// Función para obtener especies de pokemones de la API paginada
export const getEspeciesPokemon = async (pageOffset = 0) => {
    const response = await fetch(`${BASE_URL_POKEAPI}${ENDPOINT_ESPECIES}?offset=${pageOffset}&limit=${LIMIT_PAGE}`);
    const info = await response.json();
    return info;
};

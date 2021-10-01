import axios from "axios";

export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    // page 1 = offset 0
    // page 2 = offset 15
    const res = await axios.get(`https://pokeapi.co/api/v2/
/pokemon?limit=15&offset=${perPage}&offset=${offset}`);
    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

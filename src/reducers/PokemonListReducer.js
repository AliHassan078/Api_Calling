const initialState = {
  loading: false,
  date: [],
  errorMsg: "",
};
const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg:""
      };

    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to catch Pokemon",
      };

    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        date: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
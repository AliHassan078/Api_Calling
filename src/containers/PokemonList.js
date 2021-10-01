import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../actions/pokemonActions";
import { useEffect } from "react";
import _ from "lodash";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  console.log(pokemonList);
  let page = 1;
  useEffect(() => {
    FetchData(page);
  });

  const FetchData = (page) => {
    dispatch(GetPokemonList(page));
  };

  const Showdata = () => {
    if (_.isEmpty(pokemonList.data)) {
      return <p>Have Data</p>;
    }
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };

  return <div>{Showdata()}</div>;
};
export default PokemonList;

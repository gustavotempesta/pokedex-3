import React, { useContext, useEffect } from 'react';
import { createContext, useState } from "react";
import coracao_vazio from "../../assets/img/coracao_vazio.svg";
import coracao_cheio from "../../assets/img/coracao_cheio.svg";

export const PokemonContext = createContext();
PokemonContext.displayName = "Pokemon";

function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [pokemonsFiltro, setPokemonsFiltro] = useState([])

    const favoritos = getFavoritos("favoritos");
    const [favorito, setFavorito] = useState(favoritos);

    return (
        <PokemonContext.Provider value={{ favorito, setFavorito, pokemons, setPokemons, filtro, setFiltro, pokemonsFiltro, setPokemonsFiltro}}>
            {children}
        </PokemonContext.Provider>
    );
}
export default PokemonProvider;


export const usePokemonContext = () => {
    const { pokemons, setPokemons, filtro, setFiltro, pokemonsFiltro, setPokemonsFiltro, favorito, setFavorito} = useContext(PokemonContext);

    useEffect(() => {
        setPokemonsFiltro(pokemons);
    }, [pokemons, filtro])

    async function api(url) {
        try{
            const resposta = await fetch(url);
            if(!resposta.ok){
                throw new Error(`HTTP error: ${resposta.status}`);
            }
            const dadosPokemon = await resposta.json();
            setPokemons(dadosPokemon);
        }catch(error){
            console.log(error.message)
        }
    }

    function executaBusca(filtro){
        setPokemonsFiltro(pokemons => pokemons.filter(pokemon => pokemon.name.includes(filtro)))
    }


    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favorito));
    }, [favorito])

    function toggleFavorito(pokemon) {
        const temPokemon = eFavorito(pokemon.id);
        if (!temPokemon) {
            setFavorito((favorito) => [...favorito, pokemon])
        }else{
            setFavorito(favorito => favorito.filter(pokemonFavorito => pokemon.id !== pokemonFavorito.id))
        }
    }

    function iconeFavorito(id){
        if(eFavorito(id)){
            return <img src={coracao_cheio} alt="favorito" width={"100%"}/>
        }
        return <img src={coracao_vazio} alt="Não é favorito" width={"100%"} />
    }
    
    function eFavorito(id){
        return favorito.some(pokemonFavorito => (id === pokemonFavorito.id));
    }

    
    return { api, filtro, setFiltro, executaBusca, pokemonsFiltro, favorito, toggleFavorito, iconeFavorito}
}

function getFavoritos(id) {
    let item = JSON.parse(localStorage.getItem(id));
    if (item === null) {
        item = [];
    }
    return item;
}
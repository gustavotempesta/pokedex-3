import React, { useContext, useEffect } from 'react';
import { createContext, useState } from "react";
import coracao_vazio from "../../assets/img/coracao_vazio.svg";
import coracao_cheio from "../../assets/img/coracao_cheio.svg";

export const PokemonContext = createContext();
PokemonContext.displayName = "Pokemon";

function PokemonProvider({ children }) {
    let favoritos = getFavoritos("favoritos");
    const [favorito, setFavorito] = useState(favoritos);
    const [pokemons, setPokemons] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [pokemonsFiltro, setPokemonsFiltro] = useState([])

    return (
        <PokemonContext.Provider value={{ favorito, setFavorito, pokemons, setPokemons, filtro, setFiltro, pokemonsFiltro, setPokemonsFiltro}}>
            {children}
        </PokemonContext.Provider>
    );
}
export default PokemonProvider;

export const usePokemonContext = () => {
    const { favorito, setFavorito, pokemons, setPokemons, filtro, setFiltro, pokemonsFiltro, setPokemonsFiltro} = useContext(PokemonContext);

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favorito));
    }, [favorito])

    function toggleFavorito(pokemon) {
        const temPokemon = eFavorito(pokemon.id);
        if (!temPokemon) {
            adicionaFavorito(pokemon);
        }else{
            removeFavorito(pokemon);
        }
    }
    
    function eFavorito(id){
        return favorito.some(pokemonFavorito => (id === pokemonFavorito.id));
    }

    function adicionaFavorito(pokemon) {
        setFavorito((favorito) => [...favorito, pokemon])
    }

    function removeFavorito(pokemon){
        setFavorito(favorito => favorito.filter(pokemonFavorito => pokemon.id !== pokemonFavorito.id))
    }

    function iconeFavorito(id){
        if(eFavorito(id)){
            return <img src={coracao_cheio} alt="favorito" width={"100%"}/>
        }
        return <img src={coracao_vazio} alt="Não é favorito" width={"100%"} />
    }

    async function buscaApi(url) {
        try{
            let resposta = await fetch(url);
            if(!resposta.ok){
                throw new Error(`HTTP error: ${resposta.status}`);
            }
            let dadosPokemon = await resposta.json();
            setPokemons(dadosPokemon);
        }catch(error){
            console.log(error.message)
        }
    }
    
    useEffect(() => {
        setPokemonsFiltro(pokemons);
    }, [pokemons, filtro])

    function executaBusca(filtro){
        setPokemonsFiltro(pokemons => pokemons.filter(pokemon => pokemon.name.includes(filtro)))
    }

    return { favorito, setFavorito, toggleFavorito, iconeFavorito, pokemons, setPokemons, buscaApi, filtro, setFiltro, executaBusca, pokemonsFiltro, setPokemonsFiltro}
}

function getFavoritos(id) {
    let item = JSON.parse(localStorage.getItem(id));
    if (item === null) {
        item = [];
    }
    return item;
}
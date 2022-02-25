import React, { useContext, useEffect } from 'react';
import { createContext, useState } from "react";
import coracao_vazio from "../../assets/img/coracao_vazio.svg";
import coracao_cheio from "../../assets/img/coracao_cheio.svg";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Pokemon";

function FavoritosProvider({ children }) {
    let favoritos = getFavoritos("favoritos");
    const [favorito, setFavorito] = useState(favoritos);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}
export default FavoritosProvider;

export const useFavoritosContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);

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



    return { favorito, setFavorito, toggleFavorito, iconeFavorito}
}

function getFavoritos(id) {
    let item = JSON.parse(localStorage.getItem(id));
    if (item === null) {
        item = [];
    }
    return item;
}
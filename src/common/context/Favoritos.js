import React, { useContext, useEffect } from 'react';
import { createContext, useState } from "react";

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
        const temPokemon = favorito.some(pokemonFavorito => (pokemon.id === pokemonFavorito.id));
        if (!temPokemon) {
            adicionaFavorito(pokemon);
        }else{
            removeFavorito(pokemon)
        }
    }

    function adicionaFavorito(pokemon) {
        setFavorito((favorito) => [...favorito, pokemon])
    }

    function removeFavorito(pokemon){
        setFavorito(favorito => favorito.filter(pokemonFavorito => pokemon.id !== pokemonFavorito.id))

    }

    return { favorito, setFavorito, toggleFavorito}
}

function getFavoritos(id) {
    let item = JSON.parse(localStorage.getItem(id));
    if (item === null) {
        item = [];
    }
    return item;
}
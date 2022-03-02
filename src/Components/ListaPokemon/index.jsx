import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePokemonContext } from '../../common/context/Pokemon';
import CardPokemon from '../CardPokemon';

const Lista = styled.div`
    padding: 22px 0 0 0;
    width: 870px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; 
`;

const Erro = styled.p`
    color: rgba(0, 0, 0, 0.42);
    font-size: 18px;
    line-height: 21px;
`;

function ListaPokemon() {
    const {pokemonsFiltro, buscaApi} = usePokemonContext()

    useEffect(() => {
        buscaApi("https://pokedex-api-three.vercel.app/api/pokemons")
    }, [])

    return (
        <Lista>
            { (pokemonsFiltro.length === 0) ? (<Erro>Nenhum Pokémon foi encontrado, tente novamente.</Erro>) : (pokemonsFiltro.map(({ id, name, image, types }) => {
                return (
                    <CardPokemon key={id} id={id} name={name} image={image} type={types[0]} />
                );
            }))}

        </Lista>
    );
}

export default ListaPokemon;
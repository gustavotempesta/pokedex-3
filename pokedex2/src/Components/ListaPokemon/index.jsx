import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CardPokemon from '../CardPokemon';

const Lista = styled.div`
    padding: 40px 0 0 98px;
    width: 1080px;
    margin: 0 auto;
    .invisivel{
        display: none;
    }
`;

const Erro = styled.p`
    color: rgba(0, 0, 0, 0.42);
    font-size: 18px;
    line-height: 21px;
`;

function ListaPokemon() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pokedex-api-three.vercel.app/api/pokemons")
        xhr.addEventListener("load", function(){
            var resposta = xhr.responseText;
            var dadosPokemons = JSON.parse(resposta);
            setPokemons(dadosPokemons);
        });
        xhr.send();
    })

    return ( 
        <Lista>
            <Erro id='erro' className='invisivel'>Nenhum Pokémon foi encontrado, tente novamente.</Erro>
            
            {pokemons.map(({id, name, image, types}) => {
                return(
                        <CardPokemon key={id} id={id} name={name} image={image} type={types[0]}/>
                );
            })}                       
        </Lista>
    );
}

export default ListaPokemon;
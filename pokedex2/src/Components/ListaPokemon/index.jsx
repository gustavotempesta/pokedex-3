import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CardPokemon from '../CardPokemon';

const Lista = styled.div`
    padding: 22px 0 0 0;
    width: 870px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; 

    .invisivel{
        display: none;
    }
`;

const Erro = styled.p`
    color: rgba(0, 0, 0, 0.42);
    font-size: 18px;
    line-height: 21px;
`;

function ListaPokemon(props) {

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=> {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pokedex-api-three.vercel.app/api/pokemons")
        xhr.addEventListener("load", function(){
            const resposta = xhr.responseText;
            const dadosPokemons = JSON.parse(resposta);
            setPokemons(dadosPokemons);
        });
        xhr.send();
    },[])

    return ( 
        <Lista>
            <Erro className='invisivel erro'>Nenhum Pokémon foi encontrado, tente novamente.</Erro>
            
            {pokemons.map(({id, name, image, types}) => {
                return(
                    <CardPokemon {...props} key={id} id={id} name={name} image={image} type={types[0]}/>
                );
            })}                       
        </Lista>
    );
}

export default ListaPokemon;
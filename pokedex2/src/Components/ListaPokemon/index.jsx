import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CardPokemon from '../CardPokemon';

const Lista = styled.ul`
    padding: 40px 0 0 98px;
    width: 1080px;
    margin: 0 auto;
`;

const ListaItem = styled.li`
    list-style: none;
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
            <ListaItem>
                {pokemons.map(({id, name, image, types}) => {
                    return(
                        <CardPokemon key={id} id={id} name={name} image={image} type={types[0]}/>
                    );
                })}                       
            </ListaItem>
        </Lista>
    );
}

export default ListaPokemon;
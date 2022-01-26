import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import InfoCard from '../InfoCard';
import Info from '../Info';

const ConteudoDetalhes = styled.div`
    width: 1080px;    
    padding: 63.13px 0 0 91px;
    margin: 0 auto;
`;

const Card = styled.div`
    width: 877px;
    height: 436px;
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    // a cor deve ser de acordo com o tipo

    background: #48D0B0;

    // definir espaçamentos padronizados e o fundo deve ser da cor do tipo
`;


function Detalhes() {

    const [pokemon, setPokemon] = useState({});
    const [type, setType] = useState([]);
    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);


    useEffect(()=> {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pokedex-api-three.vercel.app/api/pokemons/bulbasaur")
        xhr.addEventListener("load", function(){
            var resposta = xhr.responseText;
            var dadosPokemon = JSON.parse(resposta);
            setPokemon(dadosPokemon);
            
            setType(dadosPokemon.types);
            setHeight(dadosPokemon.height);
            setWeight(dadosPokemon.weight);

        });
        xhr.send();
    })   

    return ( 
        <ConteudoDetalhes>
            { 
            <Card type={type[0]}>
                <InfoCard name={pokemon.name} id={pokemon.id} image={pokemon.image} type={type[0]} height={height.value} heightunit={height.unit} weight={weight.value} weightunit={weight.unit} />
                {Info(pokemon.stats)}
            </Card>
            }

        </ConteudoDetalhes>
     );
}

export default Detalhes;
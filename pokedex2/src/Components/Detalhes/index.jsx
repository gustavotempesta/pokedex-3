import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import InfoCard from '../InfoCard';
import Habilidade from '../Habilidade';
import { corTipo } from '../Models/cores';

const ConteudoDetalhes = styled.div`
    width: 1080px;    
    padding: 63.13px 0 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    width: 877px;
    height: 436px;
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Caixa = styled.div`
    display: inline-block;
    width: ${100-38.54}%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 25px;
`;

const ConteudoCaixa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    padding: 88px 29px;
`;

function Detalhes(props) {
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [image,setImage] = useState();
    const [type, setType] = useState([]);
    const [height, setHeight] = useState({});
    const [weight, setWeight] = useState({});
    const [stats, setStats] = useState([])

    useEffect(()=> {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pokedex-api-three.vercel.app/api/pokemons/" + props.nome)
        xhr.addEventListener("load", function(){
            const resposta = xhr.responseText;
            const dadosPokemon = JSON.parse(resposta);
            setName(dadosPokemon.name);
            setId(dadosPokemon.id);
            setImage(dadosPokemon.image);       
            setType(dadosPokemon.types);
            setHeight(dadosPokemon.height);
            setWeight(dadosPokemon.weight);
            setStats(dadosPokemon.stats);
        });
        xhr.send();
    },[])   

    var cor = corTipo(type[0]);

    return ( 
        <ConteudoDetalhes>
            <Card style={{background: cor}}>
                
                <InfoCard {...props} name={name} id={id} image={image} type={type[0]} height={height.value} heightunit={height.unit} weight={weight.value} weightunit={weight.unit}/>
                
                <Caixa>
                    <ConteudoCaixa>
                        {stats.map(({name, value}) => {
                            return(
                                <Habilidade key={name} name={name} value={value}/>
                            );
                        })}
                    </ConteudoCaixa>
                </Caixa>
                
            </Card>     
        </ConteudoDetalhes>
    );
}

export default Detalhes;
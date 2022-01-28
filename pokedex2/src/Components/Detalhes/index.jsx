import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import InfoCard from '../InfoCard';
import Habilidade from '../Habilidade';

const ConteudoDetalhes = styled.div`
    width: 1080px;    
    padding: 63.13px 0 0 91px;
    margin: 0 auto;
`;

export const Card = styled.div`
    width: 877px;
    height: 436px;
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    // a cor deve ser de acordo com o tipo


    // definir espaçamentos padronizados e o fundo deve ser da cor do tipo
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

    function CorTipo(tipo) {
        if(tipo === "bug"){
            return "#BDDD6E";
        }else if(tipo === "dark"){
            return "#5F4632"
        }else if(tipo === "dragon"){
            return "#8A55FD"
        }else if(tipo === "electric"){
            return "#969101"
        }else if(tipo === "fairy"){
            return "#F87EA7"
        }else if(tipo === "fighting"){
            return "#800B11"
        }else if(tipo === "fire"){
            return "#F66C6D"
        }else if(tipo === "flying"){
            return "#085764"
        }else if(tipo === "ghost"){
            return "#472B53"
        }else if(tipo === "flying"){
            return "#085764"
        }else if(tipo === "ghost"){
            return "#472B53"
        }else if(tipo === "grass"){
            return "#48D0B0";
        }else if(tipo === "ground"){
            return "#BFAC21";
        }else if(tipo === "ice"){
            return "#103D43";
        }else if(tipo === "normal"){
            return "#ACA974";
        }else if(tipo === "poison"){
            return "#611380";
        }else if(tipo === "psychic"){
            return "#EC0E63";
        }else if(tipo === "rock"){
            return "#776A3E";
        }else if(tipo === "steel"){
            return "#7B8E8A";
        }else if(tipo === "water"){
            return "#36AFF6";
        } else{
            return "none"
        }
    }

    let cor = CorTipo(type[0]);

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
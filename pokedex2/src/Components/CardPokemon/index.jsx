import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: inline-block;
    margin: 0 6% 6% 0;
    width: 181px;
    height: 253px;
    text-align: center;
    padding: 22px 15px;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 25px;
`;

const NomePokemon = styled.h1`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: capitalize;
`;
const NumeroPokemon = styled.h2`
    margin-top: 3px;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.42);
`;

const Elipse = styled.div`
    margin-top: 16px;
    width: 151px;
    height: 151px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
`;

const ImagemPokemon = styled.img`
    padding: 15px;
    width: 122px;
    height: 122px;
`;

function CardPokemon(props) {

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

    let cor = CorTipo(props.type);

    return ( 
        <Card 
            onClick={(event) => {
                var nome = event.target.parentNode.id;
                if(nome !== ""){
                    props.paginaDetalhes(nome);
                }
            }}
            id={props.name} className='card' style={{background: cor} 
        }>
            <NomePokemon className='name'>{props.name}</NomePokemon>
            <NumeroPokemon>#{props.id}</NumeroPokemon>
            <Elipse id={props.name}>
                <ImagemPokemon src = {props.image}/>
            </Elipse>
        </Card>
     );
}

export default CardPokemon;

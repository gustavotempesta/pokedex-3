import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding: 21.13px 0 0 98px;
    width: 1080px;
    margin: 0 auto;
`;

const InputBusca = styled.input`
    display: inline-block;
    width: 70%;
    padding: 14px 22px 15px 22px;
    background: #FFFFFF;
    border: none;
    border-radius: 10px;
    color: #AFAFAF;
    font-size: 14px;
    line-height: 16px;
`;

const BotaoBusca = styled.button`
    background: #3763AD;
    width: 10%;
    padding: 14px 0;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    color: #FFCB05;
    font-size: 18px;
    font-weight: bold;
`;

function Busca() {

    const [filtro,setFiltro] = useState("");

    return ( 

        <Form onSubmit={(event) => {
            event.preventDefault();
            var cards = document.querySelectorAll(".card");
            cards.forEach(function (card){
                card.classList.remove("invisivel");
                }
            )
            document.querySelector(".erro").classList.add("invisivel")
            var numinvisivel = 0;
            cards.forEach(function (card){
                var nome = card.querySelector(".name").textContent;
                var expressao = new RegExp(filtro,"i");
                if (!expressao.test(nome)){
                    card.classList.add("invisivel");
                    numinvisivel ++
                }
            })
            if (numinvisivel === cards.length){
                document.querySelector(".erro").classList.remove("invisivel")
            }
        }}>
            <InputBusca
                onChange={(event) => {
                    setFiltro(event.target.value);
                }}
                type="text" id="pesquisa" placeholder="Digite o nome do Pokémon" required=""/>
            <BotaoBusca>
                Buscar
            </BotaoBusca>
        </Form>
     );
}

export default Busca;
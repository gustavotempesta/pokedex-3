import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detalhes from '../Detalhes';
import Home from '../Home';

function Rotas() {

    const [nomePokemon,setNomePokemon] = useState("");

    return (
            <BrowserRouter>
                <Route exact path="/">
                    <Home nomePokemon={nomePokemon} setNomePokemon={setNomePokemon}/>
                </Route>
                <Route path="/detalhes">
                    <Detalhes nomePokemon={nomePokemon} setNomePokemon={setNomePokemon}/>
                </Route>
            </BrowserRouter>
    )
}
export default Rotas;
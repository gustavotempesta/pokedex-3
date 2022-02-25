import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FavoritosProvider from '../../common/context/Favoritos';
import Favoritos from '../../pages/Favoritos';
import Cabecalho from '../Cabecalho';
import Detalhes from '../Detalhes';
import Home from '../Home';

function Rotas() {

    return (
        <BrowserRouter>
            <Cabecalho />
            <FavoritosProvider>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/detalhes/:nome">
                    <Detalhes />
                </Route>
                <Route path="/favoritos">
                    <Favoritos />
                </Route>
            </FavoritosProvider>

        </BrowserRouter>
    )
}
export default Rotas;
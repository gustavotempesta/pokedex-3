import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FavoritosProvider from '../../common/context/Favoritos';
import Detalhes from '../Detalhes';
import Home from '../Home';

function Rotas() {

    return (
        <BrowserRouter>
            <FavoritosProvider>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/detalhes/:nome">
                    <Detalhes />
                </Route>
            </FavoritosProvider>

        </BrowserRouter>
    )
}
export default Rotas;
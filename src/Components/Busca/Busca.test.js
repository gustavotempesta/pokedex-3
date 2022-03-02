import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import React from 'react';
import PokemonProvider from '../../common/context/Pokemon';
import Busca from '.';

function renderBusca() {
    return render(
        <PokemonProvider>
            <Busca/>
        </PokemonProvider>
    )
}

describe("Página Home", () => {
    describe("Quando a página é renderizada, é exibido ", () => {
        it("o campo de busca", () => {
            renderBusca();
            expect(screen.getByPlaceholderText("Digite o nome do Pokémon")).toBeInTheDocument();
        })
        it("o botão de busca", () => {
            renderBusca();
            expect(screen.getByText("Buscar")).toBeInTheDocument();
        })
    })
})





import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import React from 'react';
import PokemonProvider from '../../common/context/Pokemon';
import Busca from '.';

function renderBusca() {
    return render(
        <PokemonProvider>
            <Busca />
        </PokemonProvider>
    )
}

describe("Página Home", () => {
    describe("Quando a página home é renderizada, é exibido", () => {
        it("o campo de busca.", () => {
            renderBusca();
            expect(screen.getByPlaceholderText("Digite o nome do Pokémon")).toBeInTheDocument();
        })
        it("o botão de busca", () => {
            renderBusca();
            expect(screen.getByText("Buscar")).toBeInTheDocument();
        })
    })
    describe("O botão Buscar", () => {
        it("é habilitado quando o campo de busca é preenchido", () => {
            renderBusca();
            fireEvent.input(screen.getByPlaceholderText("Digite o nome do Pokémon"), { target: { value: "" } })
            expect(screen.getByText("Buscar")).toBeDisabled();
            fireEvent.input(screen.getByPlaceholderText("Digite o nome do Pokémon"), { target: { value: "teste de busca" } })
            expect(screen.getByText("Buscar")).toBeEnabled();
        })
    })
    // it("Quando o botão Buscar é acionado, ele dispara um função", () => {
    //     const executaBusca = {
    //         executaBusca: jest.fn()
    //     }
    //     render(<PokemonProvider value={executaBusca}>
    //         <Busca/>
    //     </PokemonProvider>)
    //     fireEvent.submit(screen.getByText("Buscar"))
    //     expect(executaBusca.executaBusca).toHaveBeenCalled();
    // })
})
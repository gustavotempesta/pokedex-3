const corTipo = (tipo) => {
    const tipos = {
        bug: '#BDDD6E',
        dark: '#5F4632',
        dragon: '#8A55FD',
        electric: '#969101',
        fairy: '#F87EA7',
        fighting: '#800B11',
        fire: '#F66C6D',
        flying: '#085764',
        ghost: '#472B53',
        grass: '#48D0B0',
        ground: '#BFAC21',
        ice: '#103D43',
        normal: '#ACA974',
        poison: '#611380',
        psychic: '#EC0E63',
        rock: '#776A3E',
        steel: '#7B8E8A',
        water: '#36AFF6'
    }
    return tipos[tipo];
}
export {corTipo};
function corTipo(tipo) {
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
export {corTipo};
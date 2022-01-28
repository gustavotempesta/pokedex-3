function executaBusca(filtro){
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
    }
    export {executaBusca};
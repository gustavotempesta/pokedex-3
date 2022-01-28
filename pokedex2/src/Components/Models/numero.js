function padronizaNumero(numero) {
    var contadorDigitos = numero.length;
    while(contadorDigitos < 3){
        numero = "0" + numero;
        contadorDigitos ++;
    }
    return numero;
}
export {padronizaNumero};
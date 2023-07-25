/*Eventos de tempo com javascript

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados.
Esses intervalos de tempo são chamados de eventos de cronometagem.

Os dois étodos-chave para usar com JavaScript são:

setimeout(funtion, tempo em ms)
-> Executa uma função, depois de esperar um número especificado em milisegunds.

setInterval(funcction, ms)
-> É o msm q setTimeout(), mas repete a execução da função continuamente
*/

function ativarContagem(){
    //document.getElementById('tempo').innerHTML = "Começou a contar";
    //tempo = setTimeout(function(){
    //    document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    //}, 5000);

    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}

function pararContagem(){
    clearInterval(tempo);
    //document.getElementById('tempo').innerHTML = "Parou a contagem";
}
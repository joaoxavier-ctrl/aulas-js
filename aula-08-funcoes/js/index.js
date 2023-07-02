//funcoes
//uma funcao javascript é executada quando algo a invoca(chama-a)

//funcao soma
function soma(valor1,valor2){
    return valor1 + valor2;
}

//funcao cotacao do dolar
function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
}

function alertaHello(){
    alert("Olá pessoas!");
}

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

//document.getElementById("texto").innerHTML = soma(15,20);

var valorReal = 7.89;
var cotacao = 5.08;

//chamando funcao soma 
var total = soma(10,23);

//chamando funcao cotacao do dolar
var totalDolar = realParaDolar(valorReal, cotacao);

alert(total);
alert("O valor em real é R$"+valorReal+" o valor em dolar é U$"+totalDolar);
alert("A temperatura é de " + x + " graus celsius");


alertaHello();

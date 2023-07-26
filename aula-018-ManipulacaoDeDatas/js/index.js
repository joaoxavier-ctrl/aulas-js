/* Manipular datas em JavaScript
*/

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();

//console.log(data);

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
//console.log(ano);

//PEGAR O MES ATUAL - DE 0 A 11 -> 0 = JANEIRO 11 = DEZEMBRO
let mes = data.getMonth();
//console.log(mes);

//MOSTRAR O MES NO FORMATO ESCRITO
const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
//console.log(mesEscrito);

//PEGAR O DIA DO MES - 1 até 31
let diaMes = data.getDate();
//console.log(diaMes);

//PEGAR O DIA DA SEMANA - 0 até 6
let diaSemana = data.getDay();
//console.log(diaSemana);

//MOSTRAR O DIA DA SEMANA ESCRITO
const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"];
let diaSemanEscrito = diasDaSemana[data.getDay()];
//console.log(diaSemanaEscrito);

//PEGAR A HORA - 0 até 23
let hora = data.getHours();
//console.log(hora);

//PEGAR OS MINUTOS - 0 até 59
let minutos = data.getMinutes();
//console.log(minutos);

//PEGAR OS SEGUNDOS - 0 até 59
let segundos = data.getSeconds();
//console.log(segundos);

//PEGAR OS MILISEGUNDOS - 0 até 999
let milisegundos = data.getMilliseconds();
//console.log(milisegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA/MES/ANO
let dataBr = data.toLocaleString('pt-BR',{timeStyle: 'short'});
//console.log(dataBr);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() +1;
ano = d.getFullYear();

function addZero(x){return x<10 ? '0' + x : ''+x}

let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;

//console.log(dataPadraoBr);

//COMPARAR DATAS - MAIOR OU MENOR. Ex: Vencimentos
var hoje = new Date();
var vencimento = new Date(2023, 6, 15);

/*if(hoje>vencimento){
    console.log("Sua conta esta vencida");
}else{
    console.log("Ainda não venceu");
}*/


//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo/(24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");
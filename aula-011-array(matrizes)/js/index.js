/*Array

os arrays JS são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição

Imagina um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

a lista[0] = (lista na posição 0) vai conter o valor "arroz".
a lista[1] = (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/

var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

//matriz literal
const lista = [      //sempre começa no 0
    "arroz",
    "feijão",
    "macarrão", 
    "leite"
]; 

//outro tipo de matriz
const lista2 = [];
lista2[0] = "arroz";
lista2[1] = "feijão";
lista2[2] = "macarrão";
lista2[3] = "leite";

//outro tipo de matriz
//const lista3 = new Array("arroz, "feijão", "macarrão", "leite");

lista[3] = "café";

alert(lista[3]);

console.log(lista);

const pessoa = ["João", "Xavier", 22]; //array(vetor)    pessoa[0];    para mostrar array

const pessoaObjeto = {                       //objeto    pessoa.nome;  para mostrar objeto
    nome: "João",
    sobrenome: "Xavier",
    idade: 30
}

pessoa.push("Brasileiro")         //acrescenta item na lista
pessoa[8]="solteiro";

alert(pessoa[pessoa.length -1]);  //retorna o ultimo item da lista

alert(pessoa[6]);

alert(Array.isArray(pessoa));     //método para saber se uma variavel é array ou não
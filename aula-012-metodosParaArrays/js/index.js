/*Array

os arrays JS são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição

Imagina um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

a lista[0] = (lista na posição 0) vai conter o valor "arroz".
a lista[1] = (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/

const pessoa = ["João", "Xavier", 22, "Estudante"]; //array(vetor)    pessoa[0];    para mostrar array

pessoa.pop(); //deleta ultimo elemento do vetor pessoa(no caso, "Estudante")
pessoa.shift(); //deleta o primeiro elemento do vetor pessoa
pessoa.push("Universitario"); //adiciona "Universitario no vetor pessoa"
pessoa.unshift("Lindu"); //adiciona no primeiro elemento do vetor pessoa 
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2"); //adiciona elemento no vetor, primeiro indica em qual posição e depois quantos elementos deseja excluir do vetor

document.getElementById("texto").innerHTML = pessoa.join(" - "); //array

const lista1 = ["Arroz", "Feijão", "leite", "carne"];
const lista2 = ["Suco", "Refrigerante", "macarrão"];

const superLista = lista1.concat(lista2); //concatena a lista 1 com a lista 2

document.getElementById("texto").innerHTML = superLista.join(" - ");

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Cristiano Ronaldo", "Ronaldinho", "Pato", "Guedes"]; //array

const craques = jogadores.slice(2,6);

const jogOrdem = jogadores.sort(); //ordem alfabetica

jogadores.sort();
jogadores.reverse();

document.getElementById("texto").innerHTML = jogadores.join(" - ");

const numeros = [40, 100, 25, 1, 5, 10];
const maior20 = numeros.filter(filtragem);

numeros.sort(function(a,b) {return a - b}); // ordem do menor para maior, numeros

document.getElementById("texto").innerHTML = maior20;

function MaiorNumero(array){
    return Math.max.apply(null, array);
}

function MenorNumero(array){
    return Math.min.apply(null, array);
}

function filtragem(value, index, array){
    return value > 20;
}
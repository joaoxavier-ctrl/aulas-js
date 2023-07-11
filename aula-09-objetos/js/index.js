/*objetos

objetos sao basicamente variaveis com muitos valores dentro

ex: const carro = {marca: "ford", modelo: "ka", ano: 2015}

os valores dentro de um objeto são chamados propriedades.

objetos tambem podem ter métodos. Um método é uma função colocadas dentro de uma propriedade
*/

const carro = {
    marca:"ford",      //propriedades = marca, modelo, ano, placa
    modelo: "ka",
    ano: 2015, 
    placa: "ABC-1234",
    buzina: function(){alert('Biiiiiii')}, //método buzina
    completo: function(){
        return "A marca é: " + this.marca + " e o modelo é: " + this.modelo;
    }
};

console.log(carro);

carro.buzina();

console.log(carro.completo());


